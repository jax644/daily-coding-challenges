// You're a square!

// A square of squares
// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false

// PSEUDO CODE

 // check to see if the square root of n is a whole number
    // get the square root of n
    // check if the square root is equal to Math.floor() of the square root
      // if yes, return true
      // otherwise, return false


// FIRST SOLUTION

var isSquare = function(n){
    if (Math.sqrt(n) == Math.floor((Math.sqrt(n)))) {
      return true
    }
    else {
      return false
    }
}

// ARROW FUNCTION SOLUTION

const isSquare = (n) => Math.sqrt(n) == Math.floor((Math.sqrt(n))) ? true : false

// LESSONS
// I forgot again that when an arrow function is wrapped in curly braces, there is no implicit "return".  You need to either specify 'return' or remove the curly braces to get the proper return value.