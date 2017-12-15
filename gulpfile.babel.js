import develop from './gulp/tasks/development';
import prod from './gulp/tasks/production';

// The default task (called when you run `gulp` from cli)
exports.dev = develop;
exports.prod = prod;

exports.default = develop;
