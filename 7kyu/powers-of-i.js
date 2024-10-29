// i is the imaginary unit, it is defined by i ² = − 1 i²=−1, therefore it is a solution to x ² + 1 = 0 x²+1=0.

// Your Task 
// Complete the function pofi that returns i i to the power of a given non-negative integer in its simplest form, as a string (answer may contain i).

function pofi(n){
    if (n % 4 == 0) {
      return '1'
    }
    else if ((n + 3) % 4 == 0 ) {
      return 'i'
    }
    else if ((n + 2) % 4 == 0) {
      return '-1'
    }
    else if ((n+1) % 4 == 0) {
      return '-i'
    }
  }