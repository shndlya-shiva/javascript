const myArr = [1, 2, 3, 4, 5];
console.log("Original Array: ", myArr);
// Array Methods
console.log("Array length: ", myArr.length);
console.log("First element: ", myArr[0]);
myArr.unshift(11);
console.log("Array after unshift: ", myArr);
myArr.shift();
console.log("Array after shift: ", myArr);
console.log("Includes 3: ", myArr.includes(3));
console.log("Includes 31: ", myArr.includes(31));
console.log("Index value of Array ", myArr.indexOf(3));
const newArr = myArr.join(); // join() method converts an array into a string
console.log("Array as String: " , newArr);
const newArr2 = myArr.join(" - ");
console.log("Array as String with separator: " , newArr2);
// Slice and Splice
const myArr2 = [1, 2, 3, 4, 5];
console.log("Original Array before slice:- "); // Here Original Array will be [1, 2, 3, 4, 5]
console.log("A " , myArr2); // Here A will be [1, 2, 3, 4, 5]
const newArr3 = myArr2.slice(1, 3); // slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
console.log(newArr3); // Here newArr3 will be [2, 3] because we sliced the array from index 1 to index 3 (not included).
console.log("Original Array before splice:- "); // Here Original Array will be [1, 2, 3, 4, 5] because slice() does not modify the original array.
console.log("B " , myArr2); // Here B will be [1, 2, 3, 4, 5] because slice() does not modify the original array.
const newArr4 = myArr2.splice(1, 3); // splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. The original array will be modified.
console.log(newArr4); // Here newArr4 will be [2, 3, 4] because we removed 3 elements starting from index 1 (2, 3, 4)
console.log("Original Array after splice:- "); // Here Original Array will be [1, 5] because splice() modifies the original array.
console.log("C " , myArr2); // Here C will be [1, 5] because we removed 3 elements starting from index 1 (2, 3, 4)
