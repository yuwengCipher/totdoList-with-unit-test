const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, '../../'),
  "moduleFileExtensions": [
    "js",
    "json",
    "vue"
  ],
  "transform": {
    ".*\\.(vue)$": "vue-jest",
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest"
  },
  "moduleNameMapper": {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  "collectCoverage": true,
  "coverageDirectory":'<rootDir>/test/unit/coverage',
  "collectCoverageFrom": [
    "src/**/*.{js,vue}",
    "!src/main.js",
    "!src/router/index.js",
    "!**/node_modules/**"
  ],
  "verbose": true
}
