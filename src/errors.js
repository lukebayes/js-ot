

function notAllowed(methodName) {
  return new Error(`${methodName} not allowed`);
}

module.exports = {
  notAllowed,
};
