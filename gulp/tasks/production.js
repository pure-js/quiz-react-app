import gulp from 'gulp';
import jsonminify from 'gulp-jsonminify';

import production from '../config';

const minifyJson = () =>
  gulp.src(production.json)
    .pipe(jsonminify())
    .pipe(gulp.dest(production.dest));

const copy = () =>
  gulp.src(production.copy)
    .pipe(gulp.dest(production.dest));

const prod = gulp.parallel(minifyJson, copy);
export default prod;
