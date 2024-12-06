function hotSingles(arr1, arr2) {

    let result = []
  
    for (i=0;i<arr1.length;i++) {
      if (!arr2.includes(arr1[i]) && !result.includes(arr1[i])) {
        result.push(arr1[i])
      }
    }
    
    for (j=0;j<arr2.length;j++) {
      if (!arr1.includes(arr2[j]) && !result.includes(arr2[j])) {
        result.push(arr2[j])
      }
    }
      return result;
  }

  const hotSingles = (arr1, arr2) => [...new Set(arr1.filter((x)=>!arr2.includes(x)).concat(arr2.filter((y)=>!arr1.includes(y))))]

// Set object can only contain unique elements.  ... is a spread operator here