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

let bands: string[] = [];
bands.push("Mahdi");
bands.push(123);

// Tuple این تایپ به شدت سختگیرانس، یعنی در آرایه، جایگاه ها نیز از تایپ خاص بهره مندند
// More Strict

let myTuple: [string, number, boolean] = ["Mahdi", 31, true];
let mixed = ["John", 11, false];

mixed = myTuple;
myTuple = mixed;
myTuple[3] = 45;
myTuple[1] = 45;

// Objects

let myObj: object;
myObj = [];

console.log(typeof myObj); // return object

myObj = bands;
myObj = {};

const exampleObj = {
  prop1: "Dave",
  prop2: true,
};

exampleObj.prop1 = 123;

//   with questionmark, make a property optionall
type Guitarist = {
  name?: string;
  active?: boolean;
  albums: (string | number)[];
};

// interface Guitarist {
//     name: string;
//     active?: boolean;
//     albums: (string | number)[];
//   };

let evh: Guitarist = {
  name: "Mahdi",
  active: false,
  albums: [1984, 5150, "OU812"],
};

let jp: Guitarist = {
  name: "Jimmy",
  active: true,
  albums: ["I", "II", "IV"],
};

evh = jp;

const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name) {
    return `Hello ${guitarist.name.toLocaleLowerCase()}`;
  }
  return "Hello";
};
console.log(greetGuitarist(jp));

// Enums
enum Grade {
  U,
  D,
  C = 8,
  B,
  A,
}
// Those are enumirated
console.log(Grade.B);
