// find the average of nums in an array

function findAverage(nums) {
    return nums.reduce((acc,cur) => acc + cur)/nums.length
  }