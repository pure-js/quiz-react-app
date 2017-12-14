import gulp from 'gulp';
import ghPages from 'gulp-gh-pages';
import { paths } from './gulp/config';
import develop from './gulp/tasks/dev';
import build from './gulp/tasks/build';
import del from 'del';
import prism from 'prismjs';

const clean = () => del([ paths.build, paths.dev, paths.deploy ]);
exports.clean = clean;

// The default task (called when you run `gulp` from cli)
exports.dev = develop;
exports.build = build;

exports.default = develop;

gulp.task('deploy', gulp.series(build, () =>
  gulp.src(paths.build + '**/*')
    .pipe(ghPages())
));
