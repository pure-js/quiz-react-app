const common = {
  js: [
    'src/index.js',
  ],
};

const production = Object.assign({}, common, {
  copy: [
    'static/**/*.{png,svg,ico}',
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

export default production;
