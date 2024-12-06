// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n){
    return Number(String(n).split('').sort((a,b) => b-a).join(''))
  }
  
// split the input number into an array of its digits
    // use n.split()
// sort the digits in descending order
    // use sort((a,b) => b-a)
// join the digits back into a new number
    // use n.join()
// return the new number

// Lessons:
  // 1. Split doesn't work on numbers; they need to be converted to a string first
  // 2. Once I converted the number to a string, I forgot that I would need to turn the resultant string back into a number
  // 3. It look me a while to remember how use sort() to arrange numbers in order, probably because I never really learned it beyond memorization.  I should look at that more closely so I can commit it to long term memory.