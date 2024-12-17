// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)

function findOutlier(integers){
  
    function getParityOfArr(sample) {
      let parityOfArr
      let evenNumsInSample = 0
      let oddNumsInSample = 0
      
      let paritiesOfNumsInSample = sample.map(num => num % 2 === 0 ? "even" : "odd")
  
      for (parity of paritiesOfNumsInSample) {
        if (parity === "even") {
          evenNumsInSample += 1
          if (evenNumsInSample > 1) {
            parityOfArr = "even"
            break
          }
        } else if (parity === "odd") {
            oddNumsInSample += 1
            if (oddNumsInSample > 1) {
              parityOfArr = "odd"
              break
          }
        }
      }
      return parityOfArr
    }
    
  let parityOfIntegers = getParityOfArr(integers.slice(0,3))
    
  let outlier
  
   if (parityOfIntegers === "even") {
     outlier = integers.filter(integer => integer % 2 !== 0)
   } else if(parityOfIntegers === "odd"){
     outlier = integers.filter(integer => integer % 2 === 0)
   }
  
  return outlier[0]
  
  }