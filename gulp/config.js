const common = {
  less: 'src/main.less',
  js: [
    'src/index.js',
  ],
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
  ],
  dest: '.tmp/',
});

const production = Object.assign({}, common, {
  pug: 'src/index-prod.pug',
  copy: [
    'static/**/*.png',
  ],
  sw: [
    'src/components/service-worker.js',
  ],
  json: [
    'manifest.json',
  ],
  dest: 'dist/',
  deploy: '.publish',
});

export { development, production };
