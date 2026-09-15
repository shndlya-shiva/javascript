// singleton object or with the help of constructor function
// const tinderuser = new Object(); // creating an object using the Object constructor, 
// its a singleton object, only one instance of the object is created
const tinderuser = {}; // creating an object using the object literal syntax. 
// its not a singleton object, multiple instances of the object can be created
console.log(tinderuser); // Output: {}, empty object
tinderuser.Id = "12345"; // adding a new property to the object
tinderuser.Name = "Shiva"; // adding a new property to the object
tinderuser.IsLoggedIn = false; // adding a new property to the object
console.log(tinderuser); // Output: { Id: '12345', Name: 'Shiva', IsLoggedIn: false }
const regularUser = {
    email: "xyz@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Shiva",
            lastname: "Shandilya"
        }
    }
}
console.log(regularUser.fullname.userfullname); // Output: Shiva, accessing nested object properties 
console.log(regularUser.fullname.userfullname.lastname); // Output: Shandilya, accessing nested object properties 
console.log(regularUser.fullname?.userfullname.middlename); 
// we can use '?' in case the property does not exist, 
// it is called optional chaining operator, 
// it is used to access nested object properties without having to check if the property exists or not. 
// if the property does not exist, it will return undefined instead of throwing an error. 
// Output: undefined, accessing nested object properties using optional chaining operator, 
// it will return undefined if the property does not exist
const object1 = {1: "a", 2: "b", 3: "c"};
const object2 = {4: "d", 5: "e", 6: "f"};
const object3 = {...object1, ...object2}; // merging two objects using spread operator
console.log(object3); // Output: { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }, merged object
const object4 = Object.assign({}, object1, object2); // merging two objects using Object.assign() method
console.log(object4); // Output: { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }, merged object
const user = [
    {
    id: 1,
    email: "xyz@gmail.com"
    },
    {
    id: 2,
    email: "abc@gmail.com"
    }
]
console.log(tinderuser); // Output: { Id: '12345', Name: 'Shiva', IsLoggedIn: false }, accessing object properties
console.log(Object.keys(tinderuser)); // Output: [ 'Id', 'Name', 'IsLoggedIn' ], accessing object keys
console.log(Object.values(tinderuser)); // Output: [ '12345', 'Shiva', false ], accessing object values
console.log(Object.entries(tinderuser)); // Output: [ [ 'Id', '12345' ], [ 'Name', 'Shiva' ], [ 'IsLoggedIn', false ] ], accessing object entries
console.log(tinderuser.hasOwnProperty("Id")); // Output: true, checking if the object has a property
console.log(tinderuser.hasOwnProperty("UserName")); // Output: false, checking if the object has a property
