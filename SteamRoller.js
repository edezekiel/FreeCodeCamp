function steamrollArray(arr) {
    // arr is source (src)
    // Empty array is initialValue
    return arr.reduce(flatReducer, []);
  }
  
  // The accumulator becomes the single, resulting value from the reducer function.
  function flatReducer (accumulator, currentValue) {
      // If current value is not an array, concat it to the accumulator.
      // Otherwise, trigger recursive call to steamRollArray
      return accumulator.concat(Array.isArray(currentValue) ? steamrollArray(currentValue) : currentValue);
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);