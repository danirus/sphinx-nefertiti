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
  input: path.resolve(__dirname, '../js/src/index.js'),
  output: {
    format: 'esm',
    generatedCode: 'es2015',
    file: path.resolve(__dirname, '../site/js/sphinx-nefertiti.js'),
  },
  plugins
};
