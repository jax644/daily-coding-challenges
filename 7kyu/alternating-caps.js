function capitalize(s){
    let arr = s.split('')

    let res1 = arr.map((l, i) => i % 2 == 0 ? l.toUpperCase() : l).join('')
    let res2 = arr.map((l, i) => i % 2 != 0 ? l.toUpperCase() : l).join('')
  
    return [res1, res2]
  };