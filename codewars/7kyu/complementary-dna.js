// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

function dnaStrand(dna){
    return dna
      .split('')
      .map( char => {
        if (char === "A") {
          return "T"
        } else if (char === "T") {
          return "A"
        } else if (char === "C") {
          return "G"
        } else if (char === "G") {
          return "C"
        }
      })
      .join('')
  }