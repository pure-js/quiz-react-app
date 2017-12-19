const common = {
  less: 'src/main.less',
  js: 'src/index.js',
};

const development = Object.assign({}, common, {
  pug: 'src/layout.pug',
  lessWatch: 'src/*.less',
  jsWatch: [
    'src/**/*.js',
    'static/**/*.js',
  ],
  copy: [
    'manifest.json',
    'node_modules/bootstrap/dist/css/bootstrap.css',
  ],
  dest: '.tmp/',
});

const production = Object.assign({}, common, {
  pug: 'src/index-prod.pug',
  copy: [
    'manifest.json',
    'node_modules/bootstrap/dist/css/bootstrap.min.css',
  ],
  dest: 'dist/',
  deploy: '.publish',
});

export { development, production };
