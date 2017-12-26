import gulp from 'gulp';
import webpack from 'webpack-stream';
import jsonminify from 'gulp-jsonminify';

import { production } from '../config';
import webpackConfig from '../../webpack.prod.babel';

const js = () =>
  gulp.src(production.js)
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(production.dest));

const minifyJson = () =>
  gulp.src(production.json)
    .pipe(jsonminify())
    .pipe(gulp.dest(production.dest));

const copy = () =>
  gulp.src(production.copy)
    .pipe(gulp.dest(production.dest));

const prod = gulp.parallel(js, minifyJson, copy);
export default prod;
