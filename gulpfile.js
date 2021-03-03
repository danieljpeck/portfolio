const {series} = require('gulp');
const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const nodemon = require('nodemon');
 
sass.compiler = require('node-sass');

function sassCompile() {
  return gulp.src("assets/scss/*.scss")
      .pipe(sass())
      .pipe(gulp.dest("assets/css"))
      .pipe(browserSync.stream());
}

function sassWatch() {
  gulp.watch('./assets/**/*.scss', gulp.series('sassCompile'));
}

function browserSyncFunc() {
  gulp.watch("assets/scss/**.*", gulp.series('sassCompile'));
  gulp.watch("views/**/*.hbs").on('change', browserSync.reload);
}

function nodemonFunc(cb) {
  return nodemon({
    script: 'server.js'
  }).once('start', cb); // once only get's run........... <drum role>........ once :D
}

exports.default = series(sassCompile, nodemonFunc, browserSyncFunc);
exports.sassWatch= sassWatch;
exports.sassCompile = sassCompile;

