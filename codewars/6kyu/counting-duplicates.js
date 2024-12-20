// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text){
  
    let arr = text.toLowerCase().split('')
  
    let charsAndCounts = {}
    for (let char of arr) {
      charsAndCounts[char] = (charsAndCounts[char] || 0) + 1
      }
      
    let duplicatedChars = 0
    for (let key in charsAndCounts) {
      if (charsAndCounts[key] > 1) {
        duplicatedChars += 1
      }
    }
    
    return duplicatedChars
  }