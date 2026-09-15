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