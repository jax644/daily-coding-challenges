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

//   Arrow function version

  const pofi = (n) => 
    (n % 4) == 0 ? '1' :
    (n + 3) % 4 == 0 ? 'i' :
    (n + 2) % 4 == 0 ? '-1' :
    '-i'
  
    // Learned that if you have brackets with an arrow funcion, you need a return statement
    // Otherwise the return is implicit

    const pofi = ['1','i','-1','-i'][n%4]

    // favorite codewars solution ^

    function pofi(n) {
        switch (n%4) {
            case 0: return '1';
            case 1: return 'i';
            case 2: return '-1';
            case 3: return '-i';
        }
    }

    // most readable solution ^