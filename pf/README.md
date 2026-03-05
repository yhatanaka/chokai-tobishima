# 📷 Photo Gallery - GitHub Pages

Markdownファイルを編集するだけで写真ギャラリーを管理できるシンプルなサイトです。

## 🚀 セットアップ

### 1. GitHubリポジトリを作成
```
https://github.com/new
```

### 2. このフォルダをプッシュ
```bash
git init
git add .
git commit -m "Initial gallery setup"
git remote add origin https://github.com/[ユーザー名]/[リポジトリ名].git
git push -u origin main
```

### 3. GitHub Pages を有効化
リポジトリの `Settings → Pages → Source → main branch` を選択して保存。

しばらく待つと `https://[ユーザー名].github.io/[リポジトリ名]` で公開されます。

---

## 📝 写真の追加方法

**`_data/photos.yml`** を編集するだけです。

### ローカル画像を使う場合
1. `photos/` フォルダに画像ファイルをコピー
2. `_data/photos.yml` に追加:

```yaml
- src: "my-photo.jpg"       # photos/ フォルダ内のファイル名
  caption: "説明文"          # 省略可
  category: "旅行"           # 省略可（フィルター機能用）
```

### 外部URLを使う場合
```yaml
- src: "https://example.com/photo.jpg"
  caption: "説明文"
  category: "自然"
```

---

## ⚙️ カスタマイズ

### サイトタイトルを変更 (`_config.yml`)
```yaml
title: "My Photo Gallery"
description: "旅と日常の記録"
```

### リポジトリ名がある場合 (`_config.yml`)
```yaml
baseurl: "/my-gallery"   # GitHubリポジトリ名
url: "https://username.github.io"
```

### デザインの変更 (`assets/css/style.css`)
- `--accent` : アクセントカラー（デフォルト: ゴールド `#c9a96e`）
- `--bg` : 背景色（デフォルト: ダーク `#0e0e0e`）
- `.photo-grid { columns: 3; }` : 列数の変更

---

## 📁 ファイル構成

```
.
├── _config.yml          # サイト設定
├── _data/
│   └── photos.yml       # ← ここを編集して写真を追加
├── _layouts/
│   └── default.html     # HTMLテンプレート
├── assets/
│   ├── css/style.css    # スタイル
│   └── js/gallery.js    # ギャラリー動作
├── photos/              # ローカル画像を置くフォルダ
└── index.md             # トップページ
```
