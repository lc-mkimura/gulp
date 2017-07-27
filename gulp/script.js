/**
 * スクリプトタスク
 * JSファイルをコンパイルして出力する
 */
var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    concat = require('gulp-concat'),
    named = require('vinyl-named');
var conf = require('../webpack.config.js');

/**
 * コンパイル開始
 * @param watch
 * @returns {*}
 */
function exeWebPack(watch) {
  conf.watch = watch;
  return gulp.src(__CONFIG.path.jsconcat.src)
    .pipe(named())
    .pipe(plumber())
    .pipe(concat(__CONFIG.path.jsconcat.filename))
    //.pipe($.uglify()) //圧縮します
    .pipe(gulp.dest(__CONFIG.path.jsconcat.dest))
    .pipe($.browser.stream());
}

function exeScript(watch) {
  conf.watch = watch;
  return gulp.src(__CONFIG.path.js.src)
    .pipe(named())
    //.pipe($.uglify()) //圧縮します
    .pipe(gulp.dest(__CONFIG.path.js.dest))
    .pipe($.browser.stream());
}

function taskScript(watch) {
  exeWebPack(watch);
  exeScript(watch);
  return;
}

/**
 * スクリプトコンパイルタスク
 */
gulp.task('script', function() {
  return taskScript(false);
});

/**
 * スクリプト監視タスク
 */
gulp.task('watchScript', function() {
  return taskScript(true);
});
