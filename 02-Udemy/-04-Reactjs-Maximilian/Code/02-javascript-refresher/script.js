// --- Let & Const
/*
let myName = "Youssef";
console.log(myName);

myName = "Menu";
console.log(myName);
*/
//--------------------------------------
// --- Arrow Functions
/*
const multiply = (number) => number * 2;

console.log(multiply(2));
*/
//--------------------------------------
// --- Classes
/*
class Human {
  constructor() {
    this.gender = "male";
  }

  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  constructor() {
    super();
    this.name = "Youssef";
    this.gender = "male3";
  }

  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
person.printGender();
*/
//--------------------------------------
// --- Classes, Properties and Methods
/*
class Human {
  gender = "male";

  printGender = () => {
    console.log(this.gender);
  };
}

class Person extends Human {
  name = "Youssef";
  gender = "male3";

  printMyName = () => {
    console.log(this.name);
  };
}

const person = new Person();
person.printMyName();
person.printGender();
*/
//--------------------------------------
// --- Spread & Rest Operators
/*
// Spread Operator
// Arrays
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];

console.log(newNumbers);

// Objects
const person = {
  name: "Youssef",
};

const newPerson = {
  ...person,
  age: 20,
};

console.log(newPerson);

// Rest Operator
const filter = (...args) => {
  return args.filter((el) => el === 1);
};

console.log(filter(1, 2, 3));
*/
//--------------------------------------
// --- Destructuring
/*
const numbers = [1, 2, 3];
[num1, , num3] = numbers;
console.log(num1, num3);
*/
//--------------------------------------
// --- Reference and Primitive Types Refresher
/*
// Primitive
const number = 1;
const num2 = number;

console.log(num2);

// Reference
const person = {
  name: "Youssef",
};

const secondPerson = {
  ...person, // If you need to copy object by value
};

// const secondPerson = person;

person.name = "Menu";

console.log(secondPerson);
*/
//--------------------------------------
// --- Refreshing Array Methods
/*
const numbers = [1, 2, 3];

const doubleNumArray = numbers.map((num) => {
  return num * 2;
});

console.log(numbers);
console.log(doubleNumArray);
*/
//--------------------------------------
// --- Excersice 1
/*
function transformToObjects(numberArray) {
  // Todo: Add your logic
  // should return an array of objects

  return numberArray.map((num) => {
    return { val: num };
  });
}
console.log(transformToObjects([1, 2]));
*/
