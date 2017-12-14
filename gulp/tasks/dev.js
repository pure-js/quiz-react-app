import gulp from 'gulp';
import { paths } from '../config';
import gulpLoadPlugins from 'gulp-load-plugins';
const plugins = gulpLoadPlugins();
import browserSync from 'browser-sync';

// Get one .less file and render
const css = () =>
  gulp.src(paths.less)
    .pipe(plugins.plumber())
    .pipe(plugins.rename('main.css'))
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.less({
      compress: false
    }))
    .pipe(plugins.sourcemaps.write(''))
    .pipe(gulp.dest(paths.dev));

const html = () =>
  gulp.src(paths.pug)
    .pipe(plugins.plumber())
    .pipe(plugins.pug())
    .pipe(plugins.rename('index.html'))
    .pipe(gulp.dest(paths.dev));

const js = () =>
  gulp.src(paths.js)
    .pipe(plugins.plumber())
    .pipe(plugins.rename('main.js'))
    .pipe(gulp.dest(paths.dev));

// Rerun the task when a file changes
const watch = () => {
  gulp.watch(paths.lessWatch, css);
  gulp.watch(paths.pug, html);
  gulp.watch(paths.js, js);
};

// Static server
const serve = () => {
  browserSync.init({
    server: {
      baseDir: paths.dev,
      index: 'index.html'
    },
    browser: ['google chrome', 'chrome']
  });
};

const dev = gulp.series(gulp.parallel(css, html, js), watch, serve);
export default dev;
