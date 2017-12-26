const production = {
  sw: [
    'src/components/service-worker.js',
  ],
  json: [
    'manifest.json',
  ],
  dest: 'dist/',
};

export default production;
