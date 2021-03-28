const gulp = require('gulp');

const clean = require('./gulp/tasks/clean');
// const serve = require('./gulp/tasks/serve');
const pug2html = require('./gulp/tasks/pug2html');
const styles = require('./gulp/tasks/styles');
const scripts = require('./gulp/tasks/scripts');
const fonts = require('./gulp/tasks/fonts');
const imgMinify = require('./gulp/tasks/imgMinify');

const ghPages = require('./gulp/tasks/ghPages');

module.exports.start = gulp.series(clean, pug2html, styles, scripts, fonts, imgMinify);

module.exports.ghPages = gulp.series(ghPages);

