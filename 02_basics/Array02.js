const arr1 = ["thor", "ironman", "hulk", "captain america", "black widow"];
const arr2 = ["captain", "hawkeye", "antman", "spiderman", "doctor strange"];
const arr3 = ["wanda", "vision", "sam", "bucky", "natasha"];
// Pushing array to an array
arr1.push(arr2);
console.log(arr1); // Output: ["thor", "ironman", "hulk", "captain america", "black widow", ["captain", "hawkeye", "antman", "spiderman", "doctor strange"]]
// Concatenating two arrays
const combinedArray = arr1.concat(arr2);
console.log(combinedArray); // Output: ["thor", "ironman", "hulk", "captain america", "black widow", "captain", "hawkeye", "antman", "spiderman", "doctor strange"]
const combinedArray2 = [...arr1, ...arr2, ...arr3];
console.log(combinedArray2); // Output: ["thor", "ironman", "hulk", "captain america", "black widow", "captain", "hawkeye", "antman", "spiderman", "doctor strange", "wanda", "vision", "sam", "bucky", "natasha"]
const NumArray = [1, 2, 3, 4, 5,[6,7,8],9,10,[11,12,[13,14]]];
console.log(NumArray); // Output: [1, 2, 3, 4, 5, [6, 7, 8], 9, 10, [11, 12, [13, 14]]]
const flatArray = NumArray.flat(Infinity);
console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
console.log(Array.isArray(arr1)); // Output: true
console.log(Array.isArray(NumArray)); // Output: true
console.log(Array.isArray("Shiva")); // Output: true