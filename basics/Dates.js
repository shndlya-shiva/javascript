let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);
let myDate2 = new Date(2023, 5, 15,);
console.log(myDate2.toDateString());
console.log(myDate2.toLocaleString());
let myDate3 = new Date("2024-08-13T10:30:00");
console.log(myDate3.toLocaleString());
let myDate4 = new Date("11-08-2024");
console.log(myDate4.toLocaleString());
let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(new Date(myTimeStamp).toLocaleString());
console.log(myDate3.getTime());
console.log(Math.floor(myDate3.getTime() / 1000));
let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
console.log(newDate.toLocaleString('default', { 
    weekday: 'long', 
    timeZone: 'GMT'
}));