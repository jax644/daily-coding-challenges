// ARRAY.DIFF

/* 
    INSTRUCTIONS:

    Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

    It should remove all values from list a, which are present in list b keeping their order.

    arrayDiff([1,2],[1]) == [2]
    If a value is present in b, all of its occurrences must be removed from the other:

    arrayDiff([1,2,2,2,3],[2]) == [1,3] 
*/

/* 
    PREP:

    Notes:
    -params: arr a, arr b
    -return: an altered version of arr a that doesn't contain the el's in arr b
    -edge cases: either array is empty, b contains multiple el's, b contains el's not in a
    
    -remove ALL instances of arr b el's in a, not just one
    
    PSEUDO-CODE:
    create a new array "result" that is initialized as a copy of a
    if b is empty, return a
        otherwise, if "result" contains the element,
                reassign result to result.filter where the filtering condition is:
                    the element of result is not equal to the element of b
    return result */


// FIRST SOLUTION WITH COMMENTS AND TESTS

function arrayDiff(a, b) {
    // create a new array "result" that is initialized a copy of a
    let result = a
    console.log(`result is ${result}`)
      // if b is empty, return a
      if (b.length == 0) {
        return a
      }
      else {
        // for each element of b,
        for (let i=0; i<b.length; i++) {
          // if "result" contains the element,
          if (result.includes(b[i])) {
            //reassign result to result.filter where the filtering condition is:
                //the element of result is not equal to the element of b
            console.log(`reassinging result to exclude ${b[i]}.`)
            console.log(`result is now ${result}`)
            result = result.filter((n) => n != b[i])
          }     
          
        }
      }
      // return result 
    return result
  }

// REFACTORED SOLUTION WITHOUT COMMENTS OR TESTS


function arrayDiff(a, b) {
    let result = a
      if (b.length == 0) {
        return a
      }
      else {
        b.forEach(el => {
            if (result.includes(el)) {
                result = result.filter((n) => n != el)
            }
        })
      }
    return result
  }

// TOP CODEWARS SOLUTION

function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
  }

// LESSONS:
  // I originally initialized "result" inside of my else statement, which would have created a scoping issue when I would eventually need to return the result
  // Looking at the top codewars solution, I realized there was no need to create my own copy of a in a new variable since the filter method *creates* a copy of a