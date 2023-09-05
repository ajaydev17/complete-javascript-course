// use strict mode
"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) {
    // using this will throw error in strict mode
    hasDriverLicense = true;
}

if (hasDriversLicense) {
    console.log("You are eligible to ride!!");
}

// this will throw the error as interface is a reserved keyword
const interface = "strict mode example";
console.log(interface);
