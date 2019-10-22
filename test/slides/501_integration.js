/* eslint-disable no-unreachable */

const { assert } = require('chai');

const server = require('src/autopilot/server');

describe('Integration tests', () => {

  const instance = server._server;

  it('test that everything is hooked up as expected', () => {
    throw new Error(`
      Integration testing is a blunt tool for making sure a lot of code
      is working together at once.

      In this case, let's simulate a full HTTP request to our server:

          GET /foo

          foo

      We want to verify that the status code is 200 (it worked), and
      that the handler replied with the content we expected.

      https://hapijs.com/api#serverinjectoptions-callback
    `);
    return instance
      .inject({ method: 'GET', url: '/foo' })
      .then((response) => {
        assert.equal(response.statusCode, 200);
        assert.equal(response.payload, 'foo');
      });
  });

  it('still needs stubs for deterministic test results', () => {
    throw new Error(`
      Integration tests still have boundaries. We want all our local
      tests to pass in isolation, so we usually might want to stub out
      the Copilot model fetches.
    `);
  });
});
