const gulp = require('gulp'),
  config = require('../config'),
  paths = config.paths,
  names = config.names,
  plugins = require('gulp-load-plugins')(),
  browserSync = require('browser-sync').create();

// Get one .less file and render
const css = () =>
  gulp.src(paths.less)
    .pipe(plugins.plumber())
    .pipe(plugins.rename('main.css'))
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.less({
      compress: false
    }))
    .pipe(plugins.sourcemaps.write(''))
    .pipe(gulp.dest(paths.dev));

const html = () =>
  gulp.src(paths.pug)
    .pipe(plugins.plumber())
    .pipe(plugins.rename('index.html'))
    .pipe(plugins.pug())
    .pipe(gulp.dest(paths.dev));

const js = () =>
  gulp.src(paths.js)
    .pipe(plugins.plumber())
    .pipe(plugins.rename('main.js'))
    .pipe(gulp.dest(paths.dev));

// Rerun the task when a file changes
const watch = () => {
  gulp.watch(paths.lessWatch, css);
  gulp.watch(paths.pug, html);
  gulp.watch(paths.js, js);
}

// Static server
const serve = () => {
  browserSync.init({
    server: {
      baseDir: paths.dev,
      index: 'index.html'
    },
    browser: ['google chrome', 'chrome']
  });
}

module.exports = gulp.series(html, css, js, watch, serve);
