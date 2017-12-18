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
    'src/components/service-worker.js',
  ],
  dest: '.tmp/',
});

const production = Object.assign({}, common, {
  pug: 'src/index-prod.pug',
  copy: [
    'manifest.json',
    'node_modules/bootstrap/dist/css/bootstrap.min.css',
    'src/components/service-worker.js',
  ],
  dest: 'dist/',
  deploy: '.publish',
});

export { development, production };
