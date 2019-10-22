/* eslint-disable no-unreachable */

const { assert } = require('chai');

describe('Polyfills', () => {

  const originalFetch = global.fetch;

  let polyfillsModule;
  let fetchModule;

  beforeEach(() => {
    polyfillsModule = require.resolve('src/helpers/polyfills');
    delete require.cache[polyfillsModule];

    fetchModule = require.resolve('isomorphic-fetch');
    delete require.cache[fetchModule];
    delete global.fetch;
  });

  afterEach(() => {
    global.fetch = originalFetch;
  });

  it('mutates global state', () => {
    throw new Error(`
      Our polyfills assign junk to the global object on import.

      One goal is to use the same APIs on the client and the server.

      When we test polyfills, we need to establish a clean slate and
      clean up after ourselves like in \`beforeEach\` and \`afterEach\`.

      https://github.com/producthunt/chai-enzyme#classnamestr
    `);
    // Test that importing our `helpers/polyfill` module assigns the
    // `fetch` function globally.
    require(polyfillsModule);
    assert.equal(typeof global.fetch, 'function');
  });
});
