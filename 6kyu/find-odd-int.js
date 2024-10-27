// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(A) {
    // create a variable to store the result
    let result
    // create a new array to store evaluated numbers
    let evaluatedNums = []
    // for each number,
    for (let i=0; i<A.length;i++) {
      // check to see if we've evaluated that number already
      if (!evaluatedNums.includes(A[i])) {
      //  find the number of times each number occurs in the array
          // create filtered version of A that includes only instances of that value
          // if the length of the filtered array is odd ( l % 2 != 0),
        if (A.filter((n) => n == A[i]).length % 2 != 0) {
           // reassign "result" to the number that the array is made of ( filteredArray[0])
          result = A[i];
          break;
        }
      // after evaluating each number, push that number to the new array
        evaluatedNums.push(A[i])
      }
    }
    // return the number
    return result
  }