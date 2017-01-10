const gulp = require('gulp'),
  ghPages = require('gulp-gh-pages'),
  paths = require('./gulp/config').paths,
  dev = require('./gulp/tasks/dev'),
  del = require('del');


const clean = () => del([ paths.build, paths.dev, paths.deploy ]);
exports.clean = clean;

// TODO: make this working
gulp.task('hex', function() {
  const Highlights = require('highlights');
  let highlighter = new Highlights();
  let html = highlighter.highlightSync({
    fileContents: 'var hello = "world";',
    scopeName: 'source.js'
  });

  console.log(html);
});


// The default task (called when you run `gulp` from cli)
gulp.task('dev',dev);
gulp.task('default', dev);

gulp.task('deploy', gulp.series(dev, () =>
  gulp.src(paths.dist + '**/*')
    .pipe(ghPages())
));