const assert = require('chai').assert;
const object = require('../').object;

describe('object', () => {
  let items;

  beforeEach(() => {
    items = {a: 10, b: 20, c: 30};
  });

  describe('get', () => {
    it('returns value', () => {
      assert(object.get(items, 'a'));
    });

    it('returns undefined for unknown key', () => {
      assert.isUndefined(object.get(items, 'd'));
    });
  });

  describe('set', () => {
    it('sets a value and returns new object', () => {
      const result = object.set(items, 'b', 40);
      assert.notEqual(result, items);
    });
  });

  describe('count', () => {
    it('returns key count', () => {
      assert.equal(object.count(items), 3);
    });
  });

  describe('disallowed methods', () => {
    it('throws on slice', () => {
      assert.throws(() => {
        object.slice(items);
      }, /slice not allowed/);
    });

    it('throws on splice', () => {
      assert.throws(() => {
        object.splice(items);
      }, /splice not allowed/);
    });
  });
});
