module.exports = (gulp, plugins, paths) =>
  function () {
    gulp.src(paths.pug)
      .pipe(plugins.plumber())
      .pipe(plugins.pug())
      .pipe(gulp.dest(paths.build));
  };
