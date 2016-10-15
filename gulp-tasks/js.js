module.exports = (gulp, plugins, paths) =>
  function () {
    gulp.src(paths.js)
      .pipe(plugins.plumber())
      .pipe(plugins.rename('main.min.js'))
      .pipe(plugins.babel({
        presets: ['es2015']
      }))
      .pipe(plugins.uglify())
      .pipe(gulp.dest(paths.build));
  };
