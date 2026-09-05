/* Memory Allocation in JavaScript 
Stack Memory (Primitive Values)
Heap Memory (Objects) 
*/
let name = "John"; // Stack Memory
let age = 30; // Stack Memory
console.log(name); // Output: John
console.log(age); // Output: 30
let person = { name: "John", age: 30 }; // Heap Memory
console.log(person); // Output: { name: "John", age: 30 }
let anothername = name; // Stack Memory (Copy of the value)
console.log("Before changing anothername:");
console.log(anothername); // Output: John
anothername = "Doe"; // Stack Memory (Change the value)
console.log("After changing anothername:");
console.log(anothername); // Output: Doe
console.log("Original name variable:");
console.log(name); // Output: John (Original value remains unchanged)