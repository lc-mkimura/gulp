# Gulp Template

## 概要

- Gulpのテンプレートデータ

### 初期実行

```
npm install
```

### ファイル監視の実行 & サーバー起動

```
# ディレクトリを監視(assets/pc)
gulp

# 指定ディレクトリを監視（assets/spディレクトリを監視する例)
gulp -sp

ディレクトリ監視に初期実行時はファイル一覧（_list.html）が表示されます
```

### リリースファイル作成

```
gulp dist
```

## ファイル構成

### HTML

assets

```javascript
templates/
  _partiales/... //出力されません
  html/xxx.ejs
```

dist後

```javascript
html/xxx.html
```


### CSS

assets

```javascript
style/
  _partial/... // 出力されません
  common/css/common.styl
  css/xxx.styl
```

dist後

```javascript
common/css/common.css
css/xxx.css
```

### JS

assets

```javascript
js/
  common/js/_common/ // common.jsにコンパイルされます
    xxx1.js
    xxx2.js
  js/xxx.js
```

dist後

```javascript
common/js/common.js
js/xxx.js
```

### その他

assets

```javascript
copy/ // 画像やフォント等、そのまま出力したいものはcopy配下に入れます
  common/images/xxx.png
  images/xxx.png
  data/xxx.json
```

dist後

```javascript
common/images/xxx.png
images/xxx.png
data/xxx.json
```

### ファイル一覧

assets

```javascript
templates/_list.ejs
data/_list.json // ファイルの追加は_list.jsonに追記するだけです
```

dist後 はルートに出力されます

```javascript
_list.html // 納品ファイルに含めないように、先頭に_をつけてルートに出力しています
_list.json // 納品ファイルに含めないように、先頭に_をつけてルートに出力しています
```

## Versions

- node 4.5.0
- npm 5.0.4

## 使用ツール

- [Stylus](https://learnboost.github.io/stylus/)
- [EJS](http://www.embeddedjs.com/)