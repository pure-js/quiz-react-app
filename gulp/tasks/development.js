import gulp from 'gulp';
import { development } from '../config';

const copy = () =>
  gulp.src(development.copy)
    .pipe(gulp.dest(development.dest));

const develop = gulp.parallel(copy);
export default develop;
