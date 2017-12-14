const gulp = require('gulp'),
  config = require('../config'),
  paths = config.paths,
  names = config.names,
  plugins = require('gulp-load-plugins')();

// Get one .less file and render
const css = () =>
  gulp.src(paths.less)
    .pipe(plugins.rename('main.min.css'))
    .pipe(plugins.less({
      compress: true
    }))
    .pipe(gulp.dest(paths.build));

const html = () =>
  gulp.src(paths.prod.pug)
    .pipe(plugins.rename('index.html'))
    .pipe(plugins.pug())
    .pipe(gulp.dest(paths.build));

const js = () =>
  gulp.src(paths.js)
    .pipe(plugins.rename('main.min.js'))
    .pipe(plugins.babel({
      presets: ['es2015']
    }))
    .pipe(plugins.uglify())
    .pipe(gulp.dest(paths.build));

const build = gulp.series(html, css, js);
export default build;
