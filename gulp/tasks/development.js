import gulp from 'gulp';
import { development } from '../config';
import gulpLoadPlugins from 'gulp-load-plugins';
const plugins = gulpLoadPlugins();

// Get one .less file and render
const css = () =>
  gulp.src(development.less)
    .pipe(plugins.plumber())
    .pipe(plugins.rename('main.css'))
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.less({
      compress: false
    }))
    .pipe(plugins.sourcemaps.write(''))
    .pipe(gulp.dest(development.dest));

const html = () =>
  gulp.src(development.pug)
    .pipe(plugins.plumber())
    .pipe(plugins.pug({
      pretty: true
    }))
    .pipe(plugins.rename('index.html'))
    .pipe(gulp.dest(development.dest));

const copy = () =>
  gulp.src(development.copy)
    .pipe(gulp.dest(development.dest));

// Rerun the task when a file changes
const watch = () => {
  gulp.watch(development.lessWatch, css);
  gulp.watch(development.pug, html);
};

const develop = gulp.series(gulp.parallel(css, html, copy), watch);
export default develop;
