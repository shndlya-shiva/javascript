const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
const arr3 = [11, 12, 13, 14, 15];
// Pushing array to an array
arr1.push(arr2);
console.log(arr1); // Output: [1, 2, 3, 4, 5, [6, 7, 8, 9, 10]]
// Concatenating two arrays
const combinedArray = arr2.concat(arr3);
console.log(combinedArray); // Output: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15]