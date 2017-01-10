const gulp = require('gulp'),
  config = require('../config'),
  paths = config.paths,
  names = config.names,
  plugins = require('gulp-load-plugins')(),
  browserSync = require('browser-sync').create();

module.exports = gulp.parallel(html, css, js, serve, watch);

// Get one .less file and render
function css() {
  return gulp.src(paths.less)
    .pipe(plugins.plumber())
    .pipe(plugins.rename('main.min.css'))
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.less({
      compress: true
    }))
    .pipe(plugins.sourcemaps.write(''))
    .pipe(gulp.dest(paths.build));
}

function html() {
  return gulp.src(paths.pug)
    .pipe(plugins.plumber())
    .pipe(plugins.pug())
    .pipe(gulp.dest(paths.build));
}

function js() {
  return gulp.src(paths.js)
    .pipe(plugins.plumber())
    .pipe(plugins.rename('main.min.js'))
    .pipe(plugins.babel({
      presets: ['es2015']
    }))
    .pipe(plugins.uglify())
    .pipe(gulp.dest(paths.build));
}

// Rerun the task when a file changes
function watch() {
  gulp.watch(paths.lessWatch, css);
  gulp.watch(paths.pug, html);
  gulp.watch(paths.js, js);
}

// Static server
function serve() {
  browserSync.init({
    server: {
      baseDir: 'build',
      index: 'index.html'
    },
    browser: 'google chrome'
  });
}
