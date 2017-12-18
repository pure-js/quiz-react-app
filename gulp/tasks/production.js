import gulp from 'gulp';
import { development, production } from '../config';
import gulpLoadPlugins from 'gulp-load-plugins';
const webpack = require('webpack-stream');
const plugins = gulpLoadPlugins();

// Get one .less file and render
const css = () =>
  gulp.src(production.less)
    .pipe(plugins.rename('main.min.css'))
    .pipe(plugins.less({
      compress: true
    }))
    .pipe(gulp.dest(production.dest));

const html = () =>
  gulp.src(production.pug)
    .pipe(plugins.rename('index.html'))
    .pipe(plugins.pug())
    .pipe(gulp.dest(production.dest));

const js = () =>
  gulp.src(development.js)
    .pipe(plugins.plumber())
    .pipe(webpack(require('../../webpack.prod.js')))
    .pipe(gulp.dest(production.dest));

const copy = () =>
  gulp.src(production.copy)
    .pipe(gulp.dest(production.dest));

const prod = gulp.parallel(html, css, js, copy);
export default prod;
