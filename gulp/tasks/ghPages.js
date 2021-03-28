const gulp = require('gulp');
const ghPages = require('gulp-gh-pages');

module.exports = function ghPages() {
  return gulp.src('./build/*/*/*/*')
             .pipe(ghPages());
};