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
        console.log(`Koalas win 🏆 (${koalasAverage} vs. ${dolphinsAverage})`);
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

// array
// creating an empty array
const myArray1 = [];
console.log(myArray1);

const myArray2 = ["Sachin", "Ramesh", "Suresh"];
console.log(myArray2);

// creating an array with new keyword
const myArray3 = new Array("Sachin1", "Ramesh1", "Suresh1");
console.log(myArray3);

// accessing the element
console.log(myArray3[1]);

// get the length of the array
console.log(myArray3.length);

// mutating the array
myArray3[4] = "Rajesh1";
console.log(myArray3);
console.log(myArray3[3]);
console.log(myArray3.length);

// array basic operations/methods

// push method : inserts the element at the end of the array
// the return value of the push method is the length of the array
const friends = ["Jay", "Shan"];
const arrayLength = friends.push("Jacob");
console.log(friends);
console.log(arrayLength);

// unshift method : inserts the element at the beginning of the array
friends.unshift("Marshall");
console.log(friends);

// pop method : removes the element from the end of the array
// the return value of the pop method is the removed element
let removedElement = friends.pop();
console.log(friends);
console.log(removedElement);

// shift method : removes the element at the beginning of the array
// the return value of the shift method is the removed element
removedElement = friends.shift();
console.log(friends);
console.log(removedElement);

// indexOf method : returns the position of the element in the array
const indexOfJay = friends.indexOf("Jay");
console.log(indexOfJay);

// if not present returns -1
const indexOfShaun = friends.indexOf("Shaun");
console.log(indexOfShaun);

// includes method : returns the true/false depending upon whether the element is present or not
const includesJay = friends.includes("Jay");
console.log(includesJay);

const includesShaun = friends.includes("Shaun");
console.log(includesShaun);

// javascript object
const jonas = {
    firstName: "Jonas",
    lastName: "Schemdtmann",
    job: "teacher",
    age: "30",
    friends: ["Michael", "John", "Jacob"],
};

// accessing the elements using dot and brackets []
console.log(jonas.firstName);
console.log(jonas["firstName"]);

// Inside bracket notation we can perform any operation but with dot notation we cannot
const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

// but below one will throw error
// console.log(jonas.'first' + nameKey);

const interestedIn = prompt("What you wanna know about Jonas, his ???");

// the below one will print undefined on the console as interstedIn considered as property of the object
console.log(jonas.interestedIn);

// the below one will print the corresponding property on the console becuase it consider it as expression
console.log(jonas[interestedIn]);

// adding property to the object using dot and bracket notation
jonas.location = "Portugal";
jonas["twitter"] = "@jonasschemdtman";
console.log(jonas);

// object methods
const jonasNew = {
    firstName: "Jonas",
    lastName: "Schemdtmann",
    job: "teacher",
    birthYear: 1991,
    friends: ["Michael", "John", "Jacob"],
    hasDriversLicense: true,

    calcCurrentAge: function (birthYear) {
        return 2037 - birthYear;
    },

    calcCurrentAge_1: function () {
        return 2037 - this.birthYear;
    },

    calcCurrentAge_2: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.age}-years old ${
            this.job
        }, he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
    },
};

console.log(jonasNew.calcCurrentAge(1991));
console.log(jonasNew["calcCurrentAge"](1991));

console.log(jonasNew.calcCurrentAge_1());
console.log(jonasNew["calcCurrentAge_1"]());

console.log(jonasNew.calcCurrentAge_2());
console.log(jonasNew["calcCurrentAge_2"]());

console.log(jonasNew.getSummary());

const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    },
};

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    },
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
    console.log(
        `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
    );
} else if (john.bmi > mark.bmi) {
    console.log(
        `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
    );
}
