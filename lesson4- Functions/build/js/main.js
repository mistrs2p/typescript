"use strict";
// Type Aliases
// We cant do that with Interfaces
// interface postId = stringOrNumber
// Literal types
let myName;
// myName = 'Ahmad'
let userName;
userName = "Mahdi";
// Functions
const add = (a, b) => {
    return a + b;
};
// Void type is for function that not return anything
const logMsg = (message) => {
    console.log(message);
};
console.log("HI matt");
console.log(add(2, 5));
console.log(add("a", 5));
let subtract = function (c, d) {
    return c - d;
};
let multiply = function (a, b) {
    return a * b;
};
console.log(multiply(8, 5));
// Optional Parameters: need be in the last of the list
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(undefined, 3));
// Rest parameters
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4, 5, 6, 7, 8, 9));
// Never type
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// Custom type guard
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
// Use of the never type
const numberOrString = (value) => {
    if (typeof value === "string")
        return "string";
    if (isNumber(value))
        return "number";
    return createError("This Should Never Happen!!!");
};
// numberOrString("harrr");
