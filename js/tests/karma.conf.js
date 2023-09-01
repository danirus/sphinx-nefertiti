/* eslint-env node */

'use strict';

const path = require('node:path');
// const ip = require('ip');
const { babel } = require('@rollup/plugin-babel');
const istanbul = require('rollup-plugin-istanbul');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const replace = require('@rollup/plugin-replace');


const frameworks = ['jasmine', 'detectBrowsers'];

const plugins = [
  'karma-jasmine',
  'karma-rollup-preprocessor',
  'karma-chrome-launcher',
  'karma-firefox-launcher',
  'karma-detect-browsers',
  'karma-coverage-istanbul-reporter',
];

const reporters = ['dots', 'coverage-istanbul'];

const detectBrowsers = {
  usePhantomJS: false,
  postDetection: (availableBrowsers) => {
    if (process.env.CI === true) {
      return ["ChromeHeadless"];
    }

    if (availableBrowsers.includes("Chrome")) {
      return ["ChromeHeadless"];
    }

    if (availableBrowsers.includes("Chromium")) {
      return ["ChromiumHeadless"];
    }

    if (availableBrowsers.includes("Firefox")) {
      return ["FirefoxHeadless"];
    }

    throw new Error("Please install Chrome, Chromium or Firefox");
  },
};

const config = {
  basePath: "../..",
  port: 9876,
  colors: true,
  autoWatch: false,
  singleRun: true,
  concurrency: Number.POSITIVE_INFINITY,
  client: {
    clearContext: false,
    captureConsole: true,
  },
  files: [
    {
      pattern: 'js/tests/unit/**/*.spec.js',
      watched: false
    }
  ],

  preprocessors: {
    'js/tests/unit/**/*.spec.js': ['rollup']
  },

  rollupPreprocessor: {
    plugins: [
      replace({
        'process.env.NODE_ENV': '"dev"',
        preventAssignment: true
      }),
      istanbul({
        exclude: [
          'node_modules/**',
          'js/tests/unit/*.spec.js',
          'js/tests/helpers/*.js'
        ]
      }),
      babel({
        // Only transpile our source code
        exclude: 'node_modules/**',
        // Inline the required helpers in each file
        babelHelpers: 'inline'
      }),
      nodeResolve()
    ],
    output: {
      format: 'iife',
      name: '_nefertiti',
      sourcemap: 'inline',
      generatedCode: 'es2015'
    },
  },

  coverageIstanbulReporter: {
    dir: path.resolve(__dirname, "../coverage/"),
    reports: ["lcov", "text-summary"],
    thresholds: {
      emitWarning: false,
      global: {
        statements: 90,
        lines: 90,
        branches: 90,
        functions: 90,
      },
    },
    verbose: false
  }
};

config.detectBrowsers = detectBrowsers;
config.frameworks = frameworks;
config.plugins = plugins;
config.reporters = reporters;

module.exports = (karmaConfig) => {
  config.logLevel = karmaConfig.LOG_ERROR;
  karmaConfig.set(config);
};
