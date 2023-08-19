let js = "amazing";
if (js === "amazing") alert("Javascript is Fun!!");
console.log(17 + 29 - 50 + 40);

// most important data type: integer, string, and boolean
let isJavascript = true;
console.log(isJavascript);
console.log(typeof isJavascript);

isJavascript = "YES!!";
console.log(isJavascript);
console.log(typeof isJavascript);

isJavascript = 1;
console.log(isJavascript);
console.log(typeof isJavascript);

// undefined data type
let firstName;
console.log(firstName);
console.log(typeof firstName);

// null data type
let lastName = null;
console.log(lastName);
console.log(typeof lastName);

// let, const and var variable declaration

// use let when we sure that the variable value will change in the execution
let age = 30;
age = 31;
console.log(age);

// use const when we know that the variable value wont change in the execution
// const is the best variable declaration as using variable with let may cause buggy code
const birthYear = 1996;
console.log(birthYear);

// we cant change value of birthYear
// birthYear = 1997; this will throw an error

// var is the old way of declaring variables after ES6 it is not the preferred way of declaring variables but still works
var job = "programming";
job = "teaching";
console.log(job);

// var and let looks almost same but they are completly different below the surface.
// let is block scoped
// var has function scope

// In javascript we can initilize variable without type
lastName = "Devadiga";
console.log(lastName);

// above code works fine but it creates lastName is global scope not in the current scope, so this is not the preferred way.

// BMI calculator assignement

/* Write your code below. Good luck! 🙂 */
const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`);
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})`);
}

// conditional statements
const myAge = 15;
const isOldEnough = myAge >= 18;

if (isOldEnough) {
    console.log("You can start driving license🚗");
} else {
    const yearsLeft = 18 - myAge;
    console.log(`You are too young, wait another ${yearsLeft} years :)`);
}

const myBirthYear = 2012;

let century;
if (myBirthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

// type conversion