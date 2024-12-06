// In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.

// NOTES
// function takes in an array of integers
// function returns a boolean value
// edge cases:
    // array has 0 or 1 integers - return true

// PSEUDOCODE:
    
//   method 1:
//   create a sorted version of arr using the javascript sort() method
//   check if the original array is the same as the sorted array
//   if yes, return true; otherwise, return false

function inAscOrder(arr) {
        // Use the slice method to create a copy to modify rather than modifying the original array
      let sortedArr = arr.slice().sort((a,b) => a-b)
      
    // Compare the contents of the arrays by converting them to strings, since JavaScript can't check the contents of arrays for equality
      if (arr.join() == sortedArr.join()) {
        return true
      }
      else{
        return false
      }
}
      
    //   method 2:
    //   loop through the original array
    //   for each element, check if the next element is less
    //   if that is true for any element, return false
    //   otherwise, return true
    
function inAscOrder2(arr) {
    for (i=0;i<arr.length;i++) {
      if (arr[i] > arr[i+1]) {
        return false
      }
    }
    return true
}