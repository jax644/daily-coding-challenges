function isIsogram(str){
    let charsAndCounts = {}
    let arr = str.toLowerCase().split('')

    for (char of arr) {
      if (!charsAndCounts[char]) {
        charsAndCounts[char] = 1
      } else {
        return false
      }
    }

    return true
  }