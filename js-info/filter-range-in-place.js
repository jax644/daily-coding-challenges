// Filter range "in place"
// importance: 4
// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.

// For instance:

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

console.log( arr ); // [3, 1]

function filterRangeInPlace(arr, a, b) {
    for (i=0; i<arr.length; i++) { // Loop through the elements of the array
        if (!(arr[i] >= a && arr[i] <= b)) { // If the element at the current index does not meet the conditions,
            arr.splice(i,1) // Delete the element at the current index
            i-- // Decremenet to check the current element again, since splice shifted all the elements up
        }
    }
}