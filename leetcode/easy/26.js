// 26. Remove Duplicates from Sorted Array
// Easy
// Topics
// Companies
// Hint
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // remove any repeated elements of num in place
    // return the new length of nums

    // loop through nums
        // for each num,
            // if the num is equal to the next num,
                // remove the next num in place using splice()
                // decrement the index before proceeding to check again (in case of more than one duplicate of the same num)
    // return the new length of nums
    
    for (i=0; i<nums.length; i++) {
        if (nums[i] === nums[i+1]) {
            nums.splice(i+1,1)
            i--
        }
    }

    return nums.length

};