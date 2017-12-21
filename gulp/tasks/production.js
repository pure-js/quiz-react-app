import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import { production } from '../config';

const webpack = require('webpack-stream');
const webpackConfig = require('../../webpack.prod.js');

const plugins = gulpLoadPlugins();

// Get one .less file and render
const css = () =>
  gulp.src(production.less)
    .pipe(plugins.less({
      compress: true,
    }))
    .pipe(plugins.rename('main.min.css'))
    .pipe(gulp.dest(production.dest));

const html = () =>
  gulp.src(production.pug)
    .pipe(plugins.rename('index.html'))
    .pipe(plugins.pug())
    .pipe(gulp.dest(production.dest));

const js = () =>
  gulp.src(production.js)
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(production.dest));

const minifyJson = () =>
  gulp.src(production.json)
    .pipe(plugins.jsonminify())
    .pipe(gulp.dest(production.dest));

const copy = () =>
  gulp.src(production.copy)
    .pipe(gulp.dest(production.dest));

const prod = gulp.parallel(html, css, js, minifyJson, copy);
export default prod;
