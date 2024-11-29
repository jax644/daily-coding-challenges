function highestRank(arr) {
    let numsAndFrequencies = {};
    let highestFrequency = 0;
  
    for (num of arr) {
      numsAndFrequencies[num] = (numsAndFrequencies[num] || 0) + 1;
      highestFrequency = Math.max(highestFrequency, numsAndFrequencies[num]);
    }
  
    let maxNumber = -Infinity;
  
    for (key in numsAndFrequencies) {
      if (numsAndFrequencies[key] === highestFrequency) {
        maxNumber = Math.max(maxNumber, Number(key)); // Explicitly convert key to number
      }
    }
  
    return maxNumber;
  }

/*  
Lessons: 
- Use for/of or for/in instead of i notation when possible to improve readability
- Do more efficient comparisons by setting a minimum initial value and running comparisons each iteration
*/