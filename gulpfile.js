const gulp = require('gulp'),
  ghPages = require('gulp-gh-pages'),
  paths = require('./gulp/config').paths,
  develop = require('./gulp/tasks/dev'),
  build = require('./gulp/tasks/build'),
  del = require('del'),
  mkdirp = require('mkdirp'),
  prism = require('prismjs');

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
