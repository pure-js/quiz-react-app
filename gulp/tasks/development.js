import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import { development } from '../config';
import webpack from 'webpack-stream';
const webpackConfig = require('../../webpack.dev.js');

const plugins = gulpLoadPlugins();

const js = () =>
  gulp.src(development.js)
    .pipe(plugins.plumber())
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(development.dest));

const copy = () =>
  gulp.src(development.copy)
    .pipe(gulp.dest(development.dest));

// Rerun the task when a file changes
const watch = () => {
  gulp.watch(development.jsWatch, js);
};

const develop = gulp.series(gulp.parallel(js, copy), watch);
export default develop;
