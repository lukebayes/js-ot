const assert = require('chai').assert;
const operations = require('../').operations;

describe('Operations', () => {

  it('is callable', () => {
    assert(operations);
  });
});
