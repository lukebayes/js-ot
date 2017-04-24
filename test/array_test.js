const array = require('../').array;
const assert = require('chai').assert;

describe('array', () => {
  let items;

  beforeEach(() => {
    items = ['a', 'b', 'c'];
  });

  describe('count', () => {
    it('returns provided array length', () => {
      assert.equal(array.count([]), 0);
    });
  });

  describe('get', () => {
    it('returns zeroth element', () => {
      assert.equal(array.get(items, 0), 'a');
    });

    it('returns last element', () => {
      assert.equal(array.get(items, 2), 'c');
    });

    it('like Array, returns undefined when out of bounds', () => {
      assert.isUndefined(array.get([], 1));
      assert.isUndefined(array.get([], -1));
    });
  });

  describe('slice', () => {
    it('returns a new array', () => {
      const result = array.slice(items, 1, 1);

      assert.equal(array.count(result), 1);
      assert.equal(array.get(result, 0), 'b');
      assert.notEqual(items, result);
    });

    it('transforms endIndex to count', () => {
      const result = array.slice(items, 2, 1);

      assert.equal(array.count(result), 1);
      assert.equal(array.get(result, 0), 'c');
      assert.notEqual(items, result);
    });
  });

  describe('splice', () => {
    it('removes item at index 0 and returns remaining elements', () => {
      const result = array.splice(items, 0, 1);
      assert.equal(array.count(result), 2);
      assert.equal(array.get(result, 0), 'b');
      assert.equal(array.get(result, 1), 'c');
    });

    it('removes items at index 1 and 2 and returns remaining elements', () => {
      const result = array.splice(['a', 'b', 'c', 'd', 'e'], 1, 2);
      assert.equal(array.count(result), 3);
      assert.equal(array.get(result, 0), 'a');
      assert.equal(array.get(result, 1), 'd');
      assert.equal(array.get(result, 2), 'e');
    });

    it('inserts provided elements at index', () => {
      const result = array.splice(items, 1, 0, ['d', 'e', 'f', 'g', 'h', 'i']);
      assert.equal(array.count(result), 9);
      assert.equal(array.get(result, 0), 'a');

      // inserted items
      assert.equal(array.get(result, 1), 'd');
      assert.equal(array.get(result, 2), 'e');
      assert.equal(array.get(result, 3), 'f');
      assert.equal(array.get(result, 4), 'g');
      assert.equal(array.get(result, 5), 'h');
      assert.equal(array.get(result, 6), 'i');

      assert.equal(array.get(result, 7), 'b');
      assert.equal(array.get(result, 8), 'c');
    });
  });
});
