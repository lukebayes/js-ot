
/**
 * QUESTION(lbays): ot.go indicates that SpliceInfo will take empty collections
 * to indicate deletions, but the splice implementation is richer than this. A
 * caller may use splice to simultaneously insert and delete. Should we
 * separate these mutations into different methods or add information to this
 * info object?
 *
 * Also, if this info object must store two collection references before and
 * after a mutation, this seems like a memory and performance problem for
 * even moderately sized collections.
 */
function spliceInfo(offset, beforeSet, afterSet) {
  return {
    offset: offset,
    before: beforeSet,
    after: afterSet,
  };
}

function setInfo(key, beforeSet, afterSet) {
  return {
    key: key,
    before: beforeSet,
    after: afterSet,
  };
}

module.exports = {
  setInfo,
  spliceInfo,
};
