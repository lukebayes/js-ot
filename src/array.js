
/**
 * Get the number of items in the collection.
 */
function count(arr) {
  return arr.length;
}

/**
 * Get the value at the provided index.
 */
function get(arr, index) {
  return arr[index];
}

/**
 * Immutable slice implementation.
 *
 * NOTE(lbayes): The JavaScript slice implementation uses offset + END INDEX,
 * but the OT protocol slice implementation uses offset + COUNT.
 *
 * NOTE(lbayes): In order to provide the most significant performance,
 * boundary violations will default to whatever the underlying Array
 * implementation does.
 */
function slice(arr, offset, includeCount) {
  const includeIndex = offset + includeCount;
  return arr.slice(offset, includeIndex);
}

/**
 * Immutable splice implementation.
 *
 * NOTE(lbayes): The JavaScript splice implementation uses parameter entries
 * to provide insertion elements, the OT protocol uses an Array in the
 * third argument position.
 */
function splice(arr, offset, deleteCount, inserts) {
  const result = arr.slice();
  if (inserts) {
    // Spread the inserts collection out into argument positions for the
    // native splice implementation surface.
    const args = [offset, deleteCount].concat(inserts);
    // PERF(lbayes): apply is notoriously slow, consider spreading these calls
    // out for smaller counts of inserts?
    result.splice.apply(result, args);
  } else {
    result.splice(offset, deleteCount);
  }

  return result;
}

module.exports = {
  count,
  get,
  slice,
  splice,
};

