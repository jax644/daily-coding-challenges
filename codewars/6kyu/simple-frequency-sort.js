 // Description:
// In this kata, you will sort elements in an array by decreasing frequency of elements. If two elements have the same frequency, sort them by increasing value.

// solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
// -- We sort by highest frequency to lowest frequency.
// -- If two elements have same frequency, we sort by increasing value.


function solve(arr){

    const numsAndFreqs = {}
  
    for (num of arr) {
      numsAndFreqs[num] = (numsAndFreqs[num] || 0) + 1
    }
    
    return arr.sort((a,b) => {
      if (numsAndFreqs[a] === numsAndFreqs[b]) {
        return a-b
      }
      return numsAndFreqs[b] - numsAndFreqs[a]
    })
    
    }