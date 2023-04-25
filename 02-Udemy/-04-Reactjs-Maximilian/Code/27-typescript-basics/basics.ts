// Primitives: number , string, boolean
// More complex types: arrays, objects
// Function types, paramters

// -- Primitives

let age: number;

age = 12;

let userName: string | string[];

userName = "Youssef";

let isInstructor: boolean;

isInstructor = false;

// -- More complex types

let hobbies: string[];

hobbies = ["Sports", "Cooking"];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Youssef",
  age: 20,
};

// person = {
//   isEmployee: false,
// };

let people: Person[];

// -- Type inference

let course: string | number = "React - The Complete Guide";

course = 12341;

// -- Functions & Types

function add(a: number, b: number) {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

// -- Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(["a", "b", "c"], "d");

// updatedArray[0].split("");
