const score = 100;
const balance = new Number(100);
console.log(balance); // Output: [Number: 100]
console.log(score); // Output: 100
console.log(balance.toString()); // Output: "100"
console.log(balance.toString()); // Output: "100"
console.log(balance.toString().length); // Output: 3
console.log(balance.toFixed(3)); // Output: "100.000"
const num = 147.823456789;
console.log(num.toPrecision(4)); // Output: "147.8"
const num2 = 100000;
console.log(num2.toLocaleString('en-IN')); // Output: "1,00,000"
// ++++++++++++++ MATHS ++++++++++++++++
 console.log("++++++++++++++ MATHS ++++++++++++++++");
console.log(Math.abs(-5)); // Output: 5
console.log(Math.round(4.2)); // Output: 4
console.log(Math.round(4.6)); // Output: 5
console.log(Math.ceil(5.2)); // Output: 6
console.log(Math.floor(5.8)); // Output: 5
console.log(Math.random()); // Output: A random number between 0 (inclusive) and 1 (exclusive)
console.log((Math.random()*10)+1); // Output: A random number between 1 (inclusive) and 11 (exclusive)
const max = 6;
const min = 1;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Output: A random integer between 1 and 6 (inclusive)