function likes(names) {
    if (names.length == 0) {
      return "no one likes this"
    }
    else if (names.length == 1) {
      return `${names[0]} likes this`
    }
    else if (names.length == 2) {
      return `${names[0]} and ${names[1]} like this`
    }
    else if (names.length == 3) {
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    }
    else if (names.length >= 4) {
      return `${names[0]}, ${names[1]} and ${names.length-2} others like this`
    }
  }

function likes(names) {
    switch (names.length) {
        case 0: return "no one likes this"; 
        case 1: return `${names[0]} likes this`; 
        case 2: return `${names[0]} and ${names[1]} like this`; 
        case 3: return `${names[0]}, ${names[1]} and ${names[2]} like this`; 
        default: return `${names[0]}, ${names[1]} and ${names.length-2} others like this`;
    }
}

function likes(names) {
    switch(names.length) {
        case 0: 
            return "no one likes this";
        case 1: 
            return `${names[0]} likes this`;
        case 2: 
            return `${names[0]} and ${names[1]} like this`;
        case 3: 
            return `${names[0]}, ${names[1]} and ${names[2]} like this`;
        default: 
            return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    }
}


const likes = (names) =>
    (names.length == 0) ? "no one likes this" :
    (names.length == 1) ? `${names[0]} likes this` :
    (names.length == 2) ? `${names[0]} and ${names[1]} like this` :
    (names.length == 3) ? `${names[0]}, ${names[1]} and ${names[2]} like this` :
    `${names[0]}, ${names[1]} and ${names.length-2} others like this`

    // learned that arrow functions always need to have an 'else', not just 'else if's'
    // you call an arrow function with the variable name and () - likes() in this example

//   lots of silly mistakes this time
  //    forgot to start index at 0
  //    forgot to keep variable names consistent (had 'arr' instead of 'names')