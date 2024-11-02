// Opposite Number

// Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

// Examples:

// 1: -1
// 14: -14
// -34: 34

// First solution

function opposite(number) {
    if (number >= 0) {
      return 0-number
    }
    else {
      return Math.abs(number)
    }
  }

// Final solution

const opposite = n => n>0 ? -n : Math.abs(n);

// Lessons: "-n" is valid; I didn't need "0-n"