import gulp from 'gulp';
import { production } from '../config';
import gulpLoadPlugins from 'gulp-load-plugins';
const plugins = gulpLoadPlugins();

// Get one .less file and render
const css = () =>
  gulp.src(production.less)
    .pipe(plugins.rename('main.min.css'))
    .pipe(plugins.less({
      compress: true
    }))
    .pipe(gulp.dest(production.dest));

const html = () =>
  gulp.src(production.pug)
    .pipe(plugins.rename('index.html'))
    .pipe(plugins.pug())
    .pipe(gulp.dest(production.dest));

const js = () =>
  gulp.src(production.js)
    .pipe(plugins.babelMinify())
    .pipe(plugins.rename({
      extname: ".min.js"
    }))
    .pipe(gulp.dest(production.dest));

const prod = gulp.parallel(html, css, js);
export default prod;
