const gulp = require('gulp'),
  plugins = require('gulp-load-plugins')(),
  browserSync = require('browser-sync').create();

const paths = {
  pug: 'src/index.pug',
  less: 'src/main.less',
  lessWatch: 'src/*.less',
  js: 'src/main.js',
  build: 'build/'
};

function getTask(task) {
  return require('./gulp-tasks/' + task)(gulp, plugins, paths);
}

// Get one .less file and render
gulp.task('css', getTask('css'));
gulp.task('html', getTask('html'));
gulp.task('js', getTask('js'));

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.lessWatch, ['css']);
  gulp.watch(paths.pug, ['html']);
  gulp.watch(paths.js, ['js']);
});

// Static server
gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: 'build',
      index: 'index.html'
    },
    browser: 'google chrome'
  });
});

gulp.task('deploy', ['build'], function() {
  return gulp.src(paths.dist + '**/*')
    .pipe(ghPages());
});

gulp.task('hex', function() {
  let Highlights = require('highlights');
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
gulp.task('build', ['html', 'css', 'js']);
gulp.task('dev', ['build', 'watch', 'serve']);
gulp.task('default', ['dev']);
