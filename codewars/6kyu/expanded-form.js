// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

//    12 --> "10 + 2"
//    45 --> "40 + 2"
// 70304 --> "70000 + 300 + 4"
// NOTE: All numbers will be whole numbers greater than 0.

// If you liked this kata, check out part 2!!

// FIRST SOLUTION WITH COMMENTS AND TESTS
function expandedForm(num) {
    // convert num to a number in order to check if it's over 10
    // if num < 10, convert num back to a string and return
    if (num < 10) {
      return num
    } 
      // if num > 10,
    else {
       // create a new array of the digits of num
      let arr = String(num).split('');
      console.log(`arr is ${arr}`)
       // create a variable padCount to store the number of 0's to add, starting at 0
      let padCount = 0;
      // loop through the array of digits backwards
      let reversedArr = arr.reverse()
      console.log(`reversedArr is ${reversedArr}`)
        // for each iteration, 
      for (i=0;i<reversedArr.length;i++) {
        if (reversedArr[i] != 0){
          // pad the element at that index with [padCount] 0's
        reversedArr[i] = reversedArr[i].padEnd(padCount+1,'0')
        console.log(`adding ${padCount} 0's to ${reversedArr[i]}`)
         // increment padCount up by one
        padCount += 1;
        console.log(`padCount is now ${padCount}`)
        }
        else {
          reversedArr.splice(i,1)
          console.log(`deleting the 0 at index ${i}`);
          padCount += 1;
          console.log(`padCount is now ${padCount}`)
          console.log(`checking index $${i} again`)
          i--
        }
      }
      let paddedArr = reversedArr.reverse()
        console.log(`paddedArr is ${paddedArr}`)
        // return the solution as a string by joining the elements with +
      return paddedArr.join(' + ');
    }
  }

  // FINAL SOLUTION, LOOPING THROUGH ARRAY BACKWARDS THIS TIME

  function expandedForm(num) {
    if (num < 10) { return num } 
    else {
      let arr = String(num).split('');
      let padCount = 0;
      for (i=arr.length-1;i>=0;i--) {
        if (arr[i] != 0){
        arr[i] = arr[i].padEnd(padCount+1,'0')
        padCount += 1;
        }
        else {
          arr.splice(i,1)
          padCount += 1;
        }
      }
      return arr.join(' + ');
    }
  }