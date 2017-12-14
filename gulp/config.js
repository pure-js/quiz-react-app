const development = {
  pug: 'src/layout.pug',
  less: 'src/main.less',
  lessWatch: 'src/*.less',
  js: 'src/*.js',
  dest: '.tmp/',
};

const production = {
  pug: 'src/index-prod.pug',
  less: 'src/main.less',
  lessWatch: 'src/*.less',
  js: 'src/*.js',
  dest: 'build/',
  deploy: '.publish'
};

export { development, production };
