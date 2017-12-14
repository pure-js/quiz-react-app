const paths = {
  prod: {
    pug: 'src/index-prod.pug',
  },
  pug: 'src/layout.pug',
  less: 'src/main.less',
  lessWatch: 'src/*.less',
  js: 'src/main.js',
  dev: '.tmp/',
  dest: 'build/',
  deploy: '.publish'
};

export { paths };
