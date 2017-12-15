const development = {
  pug: 'src/layout.pug',
  less: 'src/main.less',
  lessWatch: 'src/*.less',
  js: 'src/*.js',
  copy: [
    'manifest.json',
    'node_modules/prismjs/prism.js',
    'node_modules/prismjs/themes/prism.css',
    'node_modules/prismjs/themes/prism-solarizedlight.css',
    'node_modules/bootstrap/dist/css/bootstrap.css'
  ],
  dest: '.tmp/',
};

const production = {
  pug: 'src/index-prod.pug',
  less: 'src/main.less',
  lessWatch: 'src/*.less',
  js: 'src/*.js',
  copy: [
    'manifest.json',
    'node_modules/prismjs/prism.js',
    'node_modules/prismjs/themes/prism.css',
    'node_modules/prismjs/themes/prism-solarizedlight.css',
    'node_modules/bootstrap/dist/css/bootstrap.min.css'
  ],
  dest: 'dist/',
  deploy: '.publish',
};

export { development, production };
