type One = string;
type Two = string | number;
type Three = "Hello";

// convert to more or less specific
let a: One = "Hello";
let b = a as Two; // less specific
let c = a as Three; // more specific

// We can also use angle brackets
let d = <One>"World";
let e = <string | number>"World";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  {
    if (c === "add") return a + b;

    // empty string coerce and make all to return string
    return "" + a + b;
  }
};

let myVal: string = addOrConcat(2, 2, "concat") as string;

// Be carful! TS sees no problem - but a string is returned
let nextVal: number = addOrConcat(2, 2, "concat") as number;

// double casting

10 as unknown as string;

// The document Object Model - the DOM

// non-null assertion - put an exclamation mark at the end `!`
const img = document.querySelector("img")!;

const myImg = document.getElementById("#img") as HTMLImageElement;

// this approaach is true BUT this way will not work in TSX files for react
const nextImg = <HTMLImageElement>document.getElementById("#img");

img.src;
myImg.src;
