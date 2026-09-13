// singleton object
// object literals
// Object.create() // creates a new object with the specified prototype object and properties.
const mySym = Symbol("key1"); // Way to create a unique key for an object property
const myObj = {
    name: "Shiva", "Full Name": "Shivansh Shandilya", // property with space in name
    age: 20,
    isLoggedIn: false,
    [mySym]: "key1" // computed property name
}
console.log(myObj.name); // Output: Shiva
console.log(myObj["name"]); // Output: Shiva
console.log(myObj[mySym]); // Output: key1, correct way to access the symbol property
console.log(typeof myObj[mySym]); // Output: string
console.log(myObj["Full Name"]); // Output: Shivansh Shandilya, correct way to access the property with space in name
console.log("----------------------------------------------");
// Adding a function to the object
myObj.greet = function() {
    console.log("Hello " + this.name); // this refers to the current object
    console.log("Welcome to the world of JavaScript");
}
console.log(myObj.greet()); // correct way to add a new function to an object
// Output: Hello Shiva, Welcome to the world of JavaScript, the function is called using the object reference
// Another way to add a function to the object is using the object literal syntax
myObj.greetTwo = function() {
    console.log(`Hello ${this["Full Name"]}`); // using template literals also know as string interpolation
    console.log(`This is a new function added to the object`);
}
console.log(myObj.greetTwo()); // correct way to add a new function to an object
console.log("----------------------------------------------");
myObj.age = 21; // updating the value of age property
console.log(myObj.age);
Object.freeze(myObj); // prevents modification of existing properties and values
myObj.age = 20; // this will not work as the object is frozen
console.log(myObj); // Output: 21, the value remains unchanged
