// Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

// Examples
// "1999" --> "20th"
// "2011" --> "21st"
// "2154" --> "22nd"
// "2259" --> "23rd"
// "1124" --> "12th"
// "2000" --> "20th"

function whatCentury(year) {
    let centuryNum = Math.ceil((year)/100)
    let penultDigit = String(centuryNum).split('').slice(-2,-1)
    let lastDigit = String(centuryNum).split('').slice(-1)
    let appendage = "th"
    
    if (lastDigit == 1 && penultDigit != 1) {
      appendage = "st"
    }
    else if (lastDigit == 2 && penultDigit != 1) {
      appendage = "nd"
    }
    else if (lastDigit == 3 && penultDigit != 1) {
      appendage = "rd"
    }
    
  return `${centuryNum}${appendage}`
}