// use strict mode
"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) {
    // using this will throw error in strict mode
    hasDriversLicense = true;
}

if (hasDriversLicense) {
    console.log("You are eligible to ride!!");
}

// this will throw the error as interface is a reserved keyword
// const interface = "strict mode example";
// console.log(interface);

// const private = "we can not use private as variable name";
// console.log(private);

// const if = "we cant use if as variable name";
// console.log(if);

function logger() {
    console.log("My name is Ajay");
}

logger();
logger();
logger();

// function with parameters
function fruitProcess(apple, orange) {
    console.log(apple, orange);
}

fruitProcess(5, 2);

// function with parameters and return value
function fruitProcess2(apple, orange) {
    const juice = `Juice with ${apple} apples and ${orange} oranges`;
    return juice;
}

const result = fruitProcess2(5, 2);
console.log(result);

// function defination example
function calcAge(birthYear) {
    return 2037 - birthYear;
}

// function expression example / anonymous function
const getAge = function (birthYear) {
    return 2037 - birthYear;
};

// arrow function example
const getMyAge = (birthYear) => 2037 - birthYear;

console.log(getMyAge(1996));

// calculate Average
const calculateAvergae = (a, b, c) => {
    return (a + b + c) / 3;
};

console.log(calculateAvergae(3, 4, 5));

let scoreDolphins = calculateAvergae(70, 98, 89);
let scoreKoalas = calculateAvergae(84, 78, 94);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = (dolphinsAverage, koalasAverage) => {
    if (dolphinsAverage >= 2 * koalasAverage) {
        console.log(
            `Dolphins win 🏆 (${dolphinsAverage} vs. ${koalasAverage})`
        );
    } else if (koalasAverage >= 2 * dolphinsAverage) {
        console.log(`Kolas win 🏆 (${koalasAverage} vs. ${dolphinsAverage})`);
    } else {
        console.log("No team wins!!...");
    }
};

checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

// Test 2
scoreDolphins = calculateAvergae(85, 54, 41);
scoreKoalas = calculateAvergae(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
