const name = "John Doe";
const age = 30;
console.log(`My name is ${name} and I am ${age} years old.`); 
// $ { } is used for string interpolation in JavaScript, allowing you to embed expressions within template literals.
// ` ` represents template literals in JavaScript. This eliminates the need for messy plus-sign (+) concatenation.
const gameName = new String("Chess");
console.log(gameName); // This will log the String object, not a primitive string.
console.log(gameName[0]); // Accessing the first character of the string using bracket notation.
console.log(gameName.__proto__); // Accessing the prototype of the String object.
console.log(gameName.length); // Getting the length of the string using the length property.
console.log(gameName.toUpperCase()); // Converting the string to uppercase using the toUpperCase() method.
console.log(gameName.charAt(3)); // Getting the character at index 3 using the charAt() method. 
console.log(gameName.indexOf("e")); // Finding the index of the first occurrence of "e" using the indexOf() method.
const Name = "Shivansh Shandilya";
const newName = Name.substring(0, 5); // Extracting a substring from index 0 to 5 using the substring() method.
console.log(newName); // Output: Shiva
const newName2 = Name.slice(0, 5); // Extracting a substring from index 0 to 5 using the slice() method. You can also use negative indices with slice() to extract characters from the end of the string.
console.log(newName2); // Output: Shiva
console.log(Name.replace("Shivansh", "Shiva")); // Replacing "Shivansh" with "Shiva" using the replace() method.
const Name2 = "   Shivansh Shandilya   ";
console.log(Name2.length); // Getting the length of the string including whitespace.
console.log(Name2); // Before trimming whitespace from both ends of the string.
console.log(Name2.trim()); // Removing whitespace from both ends of the string using the trim() method.
console.log(Name2.trim().length); // Getting the length of the trimmed string.