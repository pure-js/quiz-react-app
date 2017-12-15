const development = {
  pug: 'src/layout.pug',
  less: 'src/main.less',
  lessWatch: 'src/*.less',
  js: 'src/*.js',
  copy: [
    'manifest.json',
    'node_modules/prismjs/themes/prism.css',
    'node_modules/prismjs/themes/prism-solarizedlight.css'
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
    'node_modules/prismjs/themes/prism.css',
    'node_modules/prismjs/themes/prism-solarizedlight.css'
  ],
  dest: 'dist/',
  deploy: '.publish',
};

export { development, production };
