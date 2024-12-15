// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

function createPhoneNumber(numbers){
    return `(${numbers.slice(0,3).join('')}) ${numbers.slice(3,6).join('')}-${numbers.slice(6).join('')}`
  }

// More readable solution

function createPhoneNumber(numbers){
  
    const areaCode = numbers.slice(0,3).join('')
    const first3 = numbers.slice(3,6).join('')
    const last4 = numbers.slice(6).join('')
    
    return `(${areaCode}) ${first3}-${last4}`
  }