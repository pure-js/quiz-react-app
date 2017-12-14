const development = {
  pug: 'src/layout.pug',
  less: 'src/main.less',
  lessWatch: 'src/*.less',
  js: 'src/main.js',
  dest: '.tmp/',
};

const production = {
  pug: 'src/index-prod.pug',
  less: 'src/main.less',
  lessWatch: 'src/*.less',
  js: 'src/main.js',
  dest: 'build/',
  deploy: '.publish'
};

export { development, production };
