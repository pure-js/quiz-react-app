const gulp = require('gulp'),
  config = require('../config'),
  paths = config.paths,
  names = config.names,
  plugins = require('gulp-load-plugins')();

module.exports = gulp.series(html, css, js);

// Get one .less file and render
function css() {
  return gulp.src(paths.less)
    .pipe(plugins.rename('main.min.css'))
    .pipe(plugins.less({
      compress: true
    }))
    .pipe(gulp.dest(paths.dev));
}

function html() {
  return gulp.src(paths.pug)
    .pipe(plugins.pug())
    .pipe(gulp.dest(paths.dev));
}

function js() {
  return gulp.src(paths.js)
    .pipe(plugins.rename('main.min.js'))
    .pipe(plugins.babel({
      presets: ['es2015']
    }))
    .pipe(plugins.uglify())
    .pipe(gulp.dest(paths.dev));
}
