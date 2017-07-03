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

// Grab js files and save as html with tags for hightlighting
function wrap() {
  const folder = './exercises/';
  const tmpFolder = '.tmp/';
  const fs = require('fs');

  mkdirp(tmpFolder, function(err) {
    if (err) throw err;
  });

  fs.readdir(folder, (err, files) => {
    files.forEach(file => {
      if(file.indexOf('.') !== -1) {
        let contents = fs.readFileSync(folder + file, 'utf8');

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
const dev = () => gulp.parallel(wrap, develop);
exports.dev = dev;

gulp.task('build', gulp.parallel(build));
exports.default = dev;

gulp.task('deploy', gulp.series('build', () =>
  gulp.src(paths.build + '**/*')
    .pipe(ghPages())
));
