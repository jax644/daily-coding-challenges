// Create a parser to interpret and execute the Deadfish language.

// Deadfish operates on a single value in memory, which is initially set to 0.

// It uses four single-character commands:

// i: Increment the value
// d: Decrement the value
// s: Square the value
// o: Output the value to a result array
// All other instructions are no-ops and have no effect.

// Examples
// Program "iiisdoso" should return numbers [8, 64].
// Program "iiisdosodddddiso" should return numbers [8, 64, 3600].

function parse( data ){
  
    let arr = data.split('')
    let temp = 0
    let result = []
    
    for (let el of arr) {
        if (el == "i") {
            temp++
        }
        else if (el == "d") {
            temp--
        }
        else if (el == "s") {
            temp = temp**2
        }
        else if (el == "o") {
            result.push(temp)
        }
    }
  
    return result
  }