const gulp = require('gulp'),
  ghPages = require('gulp-gh-pages'),
  paths = require('./gulp/config').paths,
  dev = require('./gulp/tasks/dev'),
  build = require('./gulp/tasks/build'),
  del = require('del'),
  mkdirp = require('mkdirp');

const clean = () => del([ paths.build, paths.dev, paths.deploy ]);
exports.clean = clean;

// Grab js files and save as html with tags for hightlighting
function wrap() {
  const folder = './exercises/';
  const tmpFolder = '.tmp/';
  const fs = require('fs');
  const Highlights = require('highlights');

  mkdirp(tmpFolder, function(err) {
    if (err) throw err;
    // if (err) {
    //   if (err.code == 'EEXIST') cb(null); // ignore the error if the folder already exists
    //   else cb(err); // something else went wrong
    // } else cb(null); // successfully created folder
  });

  fs.readdir(folder, (err, files) => {
    files.forEach(file => {
      if(file.indexOf('.') !== -1) {
        let contents = fs.readFileSync(folder + file, 'utf8');

        highlighter = new Highlights();
        let html = highlighter.highlightSync({
          fileContents: contents,
          scopeName: 'source.js'
        });

        let htmlFile = file.replace(/\.[^/.]+$/, '.html');

        fs.writeFile(tmpFolder + htmlFile, html, (err) => {
          if (err) throw err;
          console.log(htmlFile + ' is saved!');
        });
      }
    });
  });
}

// The default task (called when you run `gulp` from cli)
gulp.task('dev', gulp.parallel(wrap, dev));
gulp.task('build', gulp.parallel(build));
gulp.task('default', gulp.series('dev'));

gulp.task('deploy', gulp.series('build', () =>
  gulp.src(paths.build + '**/*')
    .pipe(ghPages())
));
