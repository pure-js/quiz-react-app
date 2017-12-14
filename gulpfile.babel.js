import gulp from 'gulp';
import ghPages from 'gulp-gh-pages';
import { development, production } from './gulp/config';
import develop from './gulp/tasks/dev';
import build from './gulp/tasks/build';
import del from 'del';

const clean = () => del([ development.dest, production.dest, production.deploy ]);
exports.clean = clean;

// The default task (called when you run `gulp` from cli)
exports.dev = develop;
exports.build = build;

exports.default = develop;

gulp.task('deploy', gulp.series(build, () =>
  gulp.src(paths.build + '**/*')
    .pipe(ghPages())
));
