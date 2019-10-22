const path = require('path');

const handlers = require('./handlers');

const BASE_PATH = exports.base = path.resolve(__dirname, '..');
const BUILD_PATH = path.join(BASE_PATH, '/build');
const PUBLIC_PATH = path.join(BUILD_PATH, '/public');

module.exports = [
  {
    method: 'GET',
    path: '/robots.txt',
    handler: {
      file: path.join(PUBLIC_PATH, '/robots.txt')
    }
  },
  {
    method: 'GET',
    path: '/foo',
    handler: (request, reply) => reply('foo')
  }
];
