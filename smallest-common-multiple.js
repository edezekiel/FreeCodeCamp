function smallestCommons(arr) {
    // sort nums in array from smallest to largest
    arr.sort((a, b) => a - b);
  
    // create array of all nums that need to be checked
    let allNums = createNumsToCheck(arr);
  
    // initialize smallest common multiple
    // smallest must be at least the biggest num in array
    let smallest = allNums[allNums.length - 1];
  
    // check if all numbers in array are divisible by smallest
    recursiveCheck(allNums, smallest);
  }
  
  function recursiveCheck(arr, smallest) {
    if (numsDivisibleBySmallest(arr, smallest)) {
      console.log("success ", smallest)
      return smallest;
    } else {
      // if they aren't, increment smallest and repeat
      recursiveCheck(arr, smallest += 1); 
    } 
  }
  
  function numsDivisibleBySmallest(arr, smallest) {
      for (let i = 0; i < arr.length; i++) { 
        if (!(isDivisibleBy(smallest, arr[i]))) {
          // console.log(smallest, " is not divisible by ", arr[i])
          return false;
        }
      }
    return true;
  }
  
  function createNumsToCheck(arr) {
    let numsToCheck = [];
  
    for (let i = 0; i <= arr[arr.length - 1]; i++) {
      if (i >= arr[0]) {
        numsToCheck.push(i);
      }
    }
    return numsToCheck;
  }
  
  // dividend means number that is being divided
  function isDivisibleBy(dividend, divisor) {
    return (dividend % divisor === 0) ? true : false;
  }