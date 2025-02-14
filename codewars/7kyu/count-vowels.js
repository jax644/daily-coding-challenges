// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let listOfLetters = Array.from(str.toLowerCase().trim());
    let vowels = listOfLetters.filter((letter) => 
      (letter == "a" || 
      letter == "e" || 
      letter == "i" ||
      letter == "o" || 
      letter == "u"))
    let result = vowels.length
    return result
  }