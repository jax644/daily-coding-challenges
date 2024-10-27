// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

// function doubleChar(str) {
//     let chars = str.split('')
//     let doubledChars = chars.map((char) => char+char)
//     let result = doubledChars.join('')
//     return result
//   }

  function doubleChar(str) {
    return str.split('').map((char) => char+char).join('')
  }