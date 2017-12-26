import gulp from 'gulp';
import jsonminify from 'gulp-jsonminify';

import production from '../config';

const minifyJson = () =>
  gulp.src(production.json)
    .pipe(jsonminify())
    .pipe(gulp.dest(production.dest));

const prod = gulp.parallel(minifyJson);
export default prod;
