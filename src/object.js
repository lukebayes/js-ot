const errors = require('./errors');

function copy(obj) {
  const result = {};
  for (var key in obj) {
    result[key] = obj[key];
  }
  return result;
}

function count(obj) {
  return Object.keys(obj).length;
}

function get(obj, key) {
  return obj[key];
}

function set(obj, key, value) {
  const result = copy(obj);
  result[key] = value;
  return result;
}

function slice() {
  throw errors.notAllowed('slice');
}

function splice() {
  throw errors.notAllowed('splice');
}

module.exports = {
  copy,
  count,
  get,
  set,
  slice,
  splice,
};

