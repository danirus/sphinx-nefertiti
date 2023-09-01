'use strict';

const path = require('node:path');
const { babel } = require('@rollup/plugin-babel');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const replace = require('@rollup/plugin-replace');

const plugins = [
  babel({
    exclude: 'node_modules/**',
    babelHelpers: 'bundled'
  }),
  replace({
    'process.env.NODE_ENV': '"production"',
    preventAssignment: true
  }),
  nodeResolve()
];

module.exports = {
  input: path.resolve(__dirname, `../js/src/bootstrap.js`),
  output: {
    file: path.resolve(__dirname, "../site/js/bootstrap.bundle.js"),
    name: 'bootstrap',
    format: 'umd',
    generatedCode: 'es2015',
    globals: {}
  },
  external: [],
  plugins
};
