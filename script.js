// Nail Salon NAME — script.js
// バニラJavaScriptのみで構成。ビルド不要でそのまま動作します。

document.addEventListener('DOMContentLoaded', function () {
  /* ---------- Header: scroll state ---------- */
  var header = document.getElementById('site-header');
  function updateHeaderScroll() {
    if (window.scrollY > 8) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }
  updateHeaderScroll();
  window.addEventListener('scroll', updateHeaderScroll, { passive: true });

  /* ---------- Hamburger / mobile nav ---------- */
  var hamburger = document.getElementById('hamburger');
  var mobileNav = document.getElementById('mobile-nav');

  function closeMobileNav() {
    hamburger.setAttribute('aria-expanded', 'false');
    mobileNav.classList.remove('is-open');
  }
  function toggleMobileNav() {
    var isOpen = mobileNav.classList.toggle('is-open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
  }
  hamburger.addEventListener('click', toggleMobileNav);

  // メニュー内のリンクをクリックしたら閉じる
  mobileNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMobileNav);
  });

  // Escキーで閉じる
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMobileNav();
  });

  /* ---------- FAQ accordion ---------- */
  var faqButtons = document.querySelectorAll('.faq-question');
  faqButtons.forEach(function (btn) {
    var answer = btn.closest('.faq-item').querySelector('.faq-answer');
    btn.addEventListener('click', function () {
      var isOpen = btn.getAttribute('aria-expanded') === 'true';

      // 他の項目を閉じる（同時に1つだけ開く仕様）
      faqButtons.forEach(function (other) {
        if (other !== btn) {
          other.setAttribute('aria-expanded', 'false');
          other.closest('.faq-item').querySelector('.faq-answer').style.maxHeight = null;
        }
      });

      if (isOpen) {
        btn.setAttribute('aria-expanded', 'false');
        answer.style.maxHeight = null;
      } else {
        btn.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  /* ---------- Fade-in on scroll ---------- */
  var fadeEls = document.querySelectorAll('.fade-in');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    fadeEls.forEach(function (el) { observer.observe(el); });
  } else {
    // IntersectionObserver未対応環境ではそのまま表示
    fadeEls.forEach(function (el) { el.classList.add('is-visible'); });
  }
});
