/* eslint-disable no-unreachable */

const sinon = require("sinon");
const { assert } = require("chai");

const Article = require("src/models/article");

describe("APIs", () => {
  let data;
  let result;

  beforeEach(() => {
    data = { slug: "foo" };
    result = Promise.resolve().then(() => data);
    sinon.stub(Article, "fetch", () => result);
  });

  afterEach(() => {
    Article.fetch.restore();
  });

  it("can be stubbed", () => {
    throw new Error(`
      Stubbing a \`Model.fetch\` method is common test boundary.
    `);
    // Test that the Article fetches the stubbed data.
    return Article.fetch("foo").then(article => {
      assert.equal(article, data);
    });
  });

  it("can fail", () => {
    throw new Error(`
      We can test the failure by overwriting \`result\` in the outer
      test scope to throw an error when it is called.
    `);
    // Test the expected error is raised when we fetch the article.
    const error = new Error("foo");
    result = result.then(() => {
      throw error;
    });
    const throwUnexpectedResolution = () => {
      throw new Error("unexpected resolution");
    };
    return Article.fetch().then(throwUnexpectedResolution, err => {
      assert.equal(err, error);
    });
  });
});
