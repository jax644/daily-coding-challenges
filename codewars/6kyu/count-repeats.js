// Write a function that returns the count of characters that have to be removed in order to get a string with no consecutive repeats.

// Note: This includes any characters

// Examples
// 'abbbbc'  => 'abc'    #  answer: 3
// 'abbcca'  => 'abca'   #  answer: 2
// 'ab cca'  => 'ab ca'  #  answer: 1

function countRepeats(str) {
    let removalCount = 0;
    str = str.split('');
    for (i=1;i<=str.length;i++) {
      if (str[i] === str[i-1]) {
        removalCount += 1;
      }
    }
      return removalCount
  }