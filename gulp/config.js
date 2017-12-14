const development = {
  pug: 'src/layout.pug',
  less: 'src/main.less',
  lessWatch: 'src/*.less',
  js: 'src/*.js',
  copy: 'manifest.json',
  dest: '.tmp/',
};

const production = {
  pug: 'src/index-prod.pug',
  less: 'src/main.less',
  lessWatch: 'src/*.less',
  js: 'src/*.js',
  copy: 'manifest.json',
  dest: 'dist/',
  deploy: '.publish',
};

export { development, production };
