module.exports = (gulp, plugins, paths) =>
  function () {
    gulp.src(paths.less)
      .pipe(plugins.plumber())
      .pipe(plugins.rename('main.min.css'))
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.less({
        compress: true
      }))
      .pipe(plugins.sourcemaps.write(''))
      .pipe(gulp.dest(paths.build));
  };
