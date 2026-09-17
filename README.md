# Nail Salon NAME — LP

ネイルサロンのランディングページです。HTML / CSS / Vanilla JavaScriptのみで構成された静的サイトで、ビルド不要、npm install不要で `index.html` を開くだけで動作します。GitHub Pagesでそのまま公開できます。

## ファイル構成

```
.
├── index.html   … ページ本体（全セクション）
├── style.css    … スタイル（CSS変数でカラー・余白・フォントを一元管理）
├── script.js    … ハンバーガーメニュー / FAQアコーディオン / スクロールフェードイン
├── images/      … ロゴ・ネイル写真などの画像ファイル
└── README.md    … このファイル
```

画像ファイルは現時点で使用していません。今後写真を追加する場所は、HTML内に
`<!-- Nail design image -->` `<!-- Salon image -->` のようなコメントで示しています。

## 編集すべき箇所（クライアント納品後によく変更される項目）

すべて `index.html` 内にあります。検索しやすいようコメントを付けています。

| 内容 | 目印 | 場所 |
| --- | --- | --- |
| 予約URL | `<!-- RESERVE_URL -->` | ヘッダー、モバイルメニュー、ヒーロー、Final CTA（4箇所） |
| Instagram等SNSのURL | `<!-- SNS_URL -->` | Final CTA、フッター |
| 店舗名 | `Nail Salon NAME` の文字列 | ロゴ、Access、フッターなど |
| 住所・営業時間・定休日 | `<!-- ACCESS_INFO -->` | Accessセクション |
| メニュー・料金 | `<!-- MENU_TABLE -->` | Menuセクション（`.menu-row` 1つ = 1メニュー） |
| FAQの質問・回答 | `<!-- FAQ_LIST -->` | FAQセクション（`.faq-item` 1つ = 1問） |
| Googleマップ | `<!-- Google Map -->` | Accessセクション内の `.access-map-placeholder` を `<iframe>` に置き換え |
| 写真の追加場所 | `<!-- Nail design image -->` `<!-- Salon image -->` | 各セクション |

### カラー・余白・フォントの変更

`style.css` の先頭 `:root { ... }` にすべての変数がまとまっています。
配色（オフホワイト・アイボリー・ベージュ・グレージュ・淡いブラウン・チャコール・アクセントカラー）や
余白サイズ、フォントはここを変更するだけでサイト全体に反映されます。

## ローカルでの確認方法

ビルド不要です。以下のいずれかの方法で確認できます。

1. **そのまま開く**：`index.html` をブラウザにドラッグ＆ドロップ、またはダブルクリックして開く
2. **簡易サーバーを使う（推奨・より本番環境に近い挙動）**：
   ```bash
   # Python がある場合
   python3 -m http.server 8000
   # → http://localhost:8000 をブラウザで開く

   # Node.js がある場合
   npx serve .
   ```

## GitHub Pagesで公開する手順

1. このフォルダの内容をGitHubのPublicリポジトリにpushする
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<ユーザー名>/<リポジトリ名>.git
   git push -u origin main
   ```
2. GitHubリポジトリの **Settings → Pages** を開く
3. **Source** を `Deploy from a branch` に設定し、Branchを `main` / フォルダを `/ (root)` に指定して **Save**
4. 数分後、`https://<ユーザー名>.github.io/<リポジトリ名>/` で公開される

すべて相対パスで構成しているため、リポジトリ名がサブパスになる場合（`/リポジトリ名/` 配下）でも
特別な設定なくそのまま表示されます。

## 補足

- APIキーや環境変数、外部の秘密情報は一切使用していません。
- フォントはGoogle Fonts（Zen Old Mincho / Zen Kaku Gothic New / Cormorant Garamond）を利用しています。すべて無料で利用可能です。
- 375px程度のスマートフォン表示を基準に、文字サイズ・タップ領域・余白を調整しています。
