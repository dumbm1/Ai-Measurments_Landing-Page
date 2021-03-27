const gulp = require('gulp');

const pug2html = require('./gulp/tasks/pug2html');
const styles = require('./gulp/tasks/styles');
const scripts = require('./gulp/tasks/scripts');
const fonts = require('./gulp/tasks/fonts');
const imgMinify = require('./gulp/tasks/imgMinify');

module.exports.start = gulp.series(pug2html, styles, scripts, fonts, imgMinify);
