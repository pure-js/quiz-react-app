import { development, production } from './gulp/config';
import develop from './gulp/tasks/development';
import prod from './gulp/tasks/production';
import del from 'del';

const clean = () => del([ development.dest, production.dest, production.deploy ]);
exports.clean = clean;

// The default task (called when you run `gulp` from cli)
exports.dev = develop;
exports.prod = prod;

exports.default = develop;
