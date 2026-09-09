let score = "33abc";
let score1 = "33";
let score2 = null;
let score3 = undefined;
let score4 = true;
let score5 = "Matt Murdock";
console.log(typeof score);
console.log(typeof(score));
console.log(typeof score1);
console.log(typeof score2);
console.log(typeof score3);
console.log(typeof score4);
console.log(typeof score5);
let valueInNumber = Number(score);
let valueInNumber1 = Number(score1);
let valueInNumber2 = Number(score2);
let valueInNumber3 = Number(score3);
let valueInNumber4 = Number(score4);
let valueInNumber5 = Number(score5);
console.log(typeof valueInNumber);
console.log(valueInNumber);
console.log(typeof valueInNumber1);
console.log(valueInNumber1);
console.log(typeof valueInNumber2);
console.log(valueInNumber2);
console.log(typeof valueInNumber3);
console.log(valueInNumber3);
console.log(typeof valueInNumber4);
console.log(valueInNumber4);
console.log(typeof valueInNumber5);
console.log(valueInNumber5);
let isLoggedIn = 1
let isLoggedIn1 = "Wilson Fisk";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
let booleanIsLoggedIn1 = Boolean(isLoggedIn1);
console.log(booleanIsLoggedIn1);
 
/* 
1-> true
0-> false
"" -> false 
*/

let SomeNumber = 33;
let SomeString = String (SomeNumber);
console.log(typeof SomeString);
console.log(SomeString);

// **************** OPERATIONS ****************
console.log("********** OPERATIONS **********");
let value1 = 3;
let negValue1 = -value1;
console.log(negValue1);
console.log(1+"2");
console.log("1"+2);
console.log(1+2+"3");
console.log("1"+2+3);
console.log((3+4)*5%3);
let gameCounter = 100;
gameCounter++;
console.log(gameCounter);
++gameCounter;
console.log(gameCounter);
gameCounter--;
console.log(gameCounter);
--gameCounter;
console.log(gameCounter);