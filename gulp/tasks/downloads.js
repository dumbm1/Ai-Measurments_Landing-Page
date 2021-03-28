const gulp = require('gulp');

module.exports = function downloads() {
  return gulp.src('src/downloads/**/*')
             .pipe(gulp.dest('build/downloads'));
};