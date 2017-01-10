const gulp = require('gulp'),
  ghPages = require('gulp-gh-pages'),
  paths = require('./gulp/config').paths,
  dev = require('./gulp/tasks/dev'),
  del = require('del');


const clean = () => del([ paths.build, paths.dev, '.publish' ]);
exports.clean = clean;

gulp.task('hex', function() {
  const Highlights = require('highlights');
  let highlighter = new Highlights();
  let html = highlighter.highlightSync({
    fileContents: 'var hello = "world";',
    scopeName: 'source.js'
  });

  console.log(html);

  // gulp.src(paths.dist + '**/*')
  //   .pipe(ghPages());
});


// The default task (called when you run `gulp` from cli)
gulp.task('dev', gulp.series(dev));
gulp.task('build', gulp.parallel(dev));
gulp.task('default', dev);

gulp.task('deploy', gulp.series('build', () =>
  gulp.src(paths.dist + '**/*')
    .pipe(ghPages())
));