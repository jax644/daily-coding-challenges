// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
  let arr = s.split('')
  
  let resultArr = []
  
  for (i=0; i<arr.length; i++) {
    resultArr.push(${arr[i].toUpperCase()}${arr[i].toLowerCase().repeat(i)})
  }
  
  return resultArr.join('-')
}