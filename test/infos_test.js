const assert = require('chai').assert;
const object = require('../').object;
const infos = require('../').infos;

describe('infos', () => {
  let arr;
  let obj;

  beforeEach(() => {
    arr = ['a', 'b', 'c'];
    obj = {a: 10, b: 20, c: 30};
  });

  it('creates a spliceInfo object', () => {
    const after = [];
    const info = infos.spliceInfo(1, arr, after);
    assert(info);
    assert.equal(info.offset, 1);
    assert(info.before === arr);
    assert(info.after === after);
  });

  it('creates setInfo object', () => {
    const after = {};
    const info = infos.setInfo('b', obj, object.set(obj, 'b', 40));
    assert(info);
    assert.equal(info.key, 'b');
    assert.equal(info.before.b, 20);
    assert.equal(info.after.b, 40);
  });
});
