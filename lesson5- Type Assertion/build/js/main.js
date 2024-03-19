"use strict";
// convert to more or less specific
let a = "Hello";
let b = a; // less specific
let c = a; // more specific
// We can also use angle brackets
let d = "World";
let e = "World";
const addOrConcat = (a, b, c) => {
    {
        if (c === "add")
            return a + b;
        // empty string coerce and make all to return string
        return "" + a + b;
    }
};
let myVal = addOrConcat(2, 2, "concat");
// Be carful! TS sees no problem - but a string is returned
let nextVal = addOrConcat(2, 2, "concat");
// double casting
10;
// The document Object Model - the DOM
// non-null assertion - put an exclamation mark at the end `!`
const img = document.querySelector("img");
const myImg = document.getElementById("#img");
// this approaach is true BUT this way will not work in TSX files for react
const nextImg = document.getElementById("#img");
img.src;
myImg.src;
