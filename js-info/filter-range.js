// Filter range
// importance: 4
// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

// The function should not modify the array. It should return the new array.

// For instance:

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

function filterRange (arr, a, b) {
    return arr.filter(el => el >= a && el <= b)
}

console.log( filtered ); // 3,1 (matching values)
console.log( arr ); // 5,3,8,1 (not modified)