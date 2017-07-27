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
pc/html/xxx.html
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
pc/common/css/common.css
pc/css/xxx.css
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
pc/common/js/common.js
pc/js/xxx.js
```

### その他

assets

```javascript
copy/ // そのままコピーされます
  common/images/xxx.png
  images/xxx.png
  data/xxx.json
```

dist後

```javascript
pc/common/images/xxx.png
pc/images/xxx.png
pc/data/xxx.json
```

## Versions

- node 4.5.0
- npm 5.0.4
- gulp-cli 1.2.2

## 使用ツール

- [Stylus](https://learnboost.github.io/stylus/)
- [EJS](http://www.embeddedjs.com/)