// Type Aliases

type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name?: string;
  active: boolean;
  albums: stringOrNumberArray;
};

type userId = stringOrNumber;

// We cant do that with Interfaces
// interface postId = stringOrNumber

// Literal types
let myName: "Dave";
// myName = 'Ahmad'

let userName: "Dave" | "Mahdi" | "Ahmad";
userName = "Mahdi";

// Functions

const add = (a: number, b: number): number => {
  return a + b;
};

// Void type is for function that not return anything
const logMsg = (message: any): void => {
  console.log(message);
};

console.log("HI matt");
console.log(add(2, 5));
console.log(add("a", 5));

let subtract = function (c: number, d: number): number {
  return c - d;
};

// With type
// type mathFunction = (a: number, b: number) => number;

// With interface
interface mathFunction {
  (a: number, b: number): number;
}

let multiply: mathFunction = function (a, b) {
  return a * b;
};
console.log(multiply(8, 5));

// Optional Parameters: need be in the last of the list

const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }

  return a + b;
};

const sumAll = (a: number = 10, b: number, c: number = 2): number => {
  return a + b + c;
};

logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(undefined, 3));

// Rest parameters

const total = (...nums: number[]): number => {
  return nums.reduce((prev, curr) => prev + curr);
};

logMsg(total(1, 2, 3, 4, 5, 6, 7, 8, 9));

// Never type

const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) break;
  }
};

// Custom type guard
const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};

// Use of the never type
const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (isNumber(value)) return "number";
  return createError("This Should Never Happen!!!");
};

// numberOrString("harrr");
