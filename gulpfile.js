const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const nodemon = require('nodemon');
 
sass.compiler = require('node-sass');
 
gulp.task('sass:watch', function () {
  gulp.watch('./assets/**/*.scss', ['sass']);
});


gulp.task('default', ['browser-sync'], function () {
});

gulp.task('browser-sync', ['nodemon'], function() {
	gulp.watch("assets/scss/**.*", ['sass']);
  gulp.watch("views/**/*.hbs").on('change', browserSync.reload);
});
gulp.task('nodemon', ['sass'], function (cb) {
  return nodemon({
    script: 'server.js'
  }).once('start', cb); // once only get's run........... <drum role>........ once :D
});
gulp.task('sass', function() {
  return gulp.src("assets/scss/*.scss")
      .pipe(sass())
      .pipe(gulp.dest("assets/css"))
      .pipe(browserSync.stream());
});