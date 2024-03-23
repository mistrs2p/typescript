"use strict";
let stringArray = ["one", "two", "three"];
let guitars = ["Strat", "Les Paul", 5150];
let mixedData = ["EVH", 1984, true];
stringArray[0] = "Mahdi";
stringArray.push("Hey");
guitars[0] = 10998;
guitars.unshift(true);
stringArray = guitars;
guitars = stringArray;
let test = [];
let bands = [];
bands.push("Mahdi");
bands.push(123);
// Tuple این تایپ به شدت سختگیرانس، یعنی در آرایه، جایگاه ها نیز از تایپ خاص بهره مندند
// More Strict
let myTuple = ["Mahdi", 31, true];
let mixed = ["John", 11, false];
mixed = myTuple;
myTuple = mixed;
myTuple[3] = 45;
myTuple[1] = 45;
// Objects
let myObj;
myObj = [];
console.log(typeof myObj); // return object
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: "Dave",
    prop2: true,
};
exampleObj.prop1 = 123;
// interface Guitarist {
//     name: string;
//     active?: boolean;
//     albums: (string | number)[];
//   };
let evh = {
    name: "Mahdi",
    active: false,
    albums: [1984, 5150, "OU812"],
};
let jp = {
    name: "Jimmy",
    active: true,
    albums: ["I", "II", "IV"],
};
evh = jp;
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toLocaleLowerCase()}`;
    }
    return "Hello";
};
console.log(greetGuitarist(jp));
// Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 8] = "C";
    Grade[Grade["B"] = 9] = "B";
    Grade[Grade["A"] = 10] = "A";
})(Grade || (Grade = {}));
// Those are enumirated
console.log(Grade.U);
console.log(Grade.B);
