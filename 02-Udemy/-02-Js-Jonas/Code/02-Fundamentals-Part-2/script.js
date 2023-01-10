/////////////////////////////////////////////////////////////////////
//----------------------- Activating Strict Mode -----------------------
"use strict";
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");
// const interface = "Audio";
// const private = 534
// const if = 23
*/
/////////////////////////////////////////////////////////////////////
//----------------------- Functions -----------------------
/*
function logger() {
  console.log("My name is Youssef");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  // console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

console.log(Number("23"));
*/
/////////////////////////////////////////////////////////////////////
//----------------------- Function Declarations vs. Expressions -----------------------
/*
// Function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);

console.log(age1, age2);
*/
/////////////////////////////////////////////////////////////////////
//----------------------- Arrow Functions -----------------------
/*
// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

// Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement}`;
};
console.log(yearsUntilRetirement(1991, "Youssef"));
console.log(yearsUntilRetirement(1980, "Ahmed"));
*/
/////////////////////////////////////////////////////////////////////
//----------------------- Functions Calling Other Functions -----------------------
/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} piece of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));
*/
/////////////////////////////////////////////////////////////////////
//----------------------- Reviewing Function -----------------------
/*
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement}`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
};
console.log(yearsUntilRetirement(1991, "Youssef"));
console.log(yearsUntilRetirement(1970, "Ahmed"));
*/
/////////////////////////////////////////////////////////////////////
//----------------------- Introduction to Arrays -----------------------
/*
const friend1 = "Ahmed";
const friend2 = "Kareem";
const friend3 = "Ibrahim";

const friends = ["Ahmed", "Kareem", "Ibrahim"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Esmail";
console.log(friends);
// friends = ["Saber", "Khaled"];

const firstName = "Youssef";
const youssef = [firstName, "Mahmoud", 2037 - 1991, "teacher", friends];
console.log(youssef);
console.log(youssef.length);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages)
*/
/////////////////////////////////////////////////////////////////////
//----------------------- Basic Array Operations (Methods) -----------------------
/*
const friends = ["Ahmed", "Kareem", "Ibrahim"];

// Add elements
const newLength = friends.push("Fathy");
console.log(friends);
console.log(newLength);

friends.unshift("Mohamed");
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf("Kareem"));
console.log(friends.indexOf("Mohamed"));

friends.push(23);
console.log(friends.includes("Kareem"));
console.log(friends.includes("Mohamed"));
console.log(friends.includes(23));

if (friends.includes('Ahmed')) {
  console.log('You have a friend called Ahmed')
}
*/
/////////////////////////////////////////////////////////////////////
//----------------------- Introduction to Objects -----------------------
/*
const youssefArray = [
  "Youssef",
  "Mahmoud",
  2037 - 1991,
  "teacher",
  ["Ahmed", "Kareem", "Ibrahim"],
];

const youssef = {
  firstName: "Youssef",
  lastName: "Mahmoud",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Ahmed", "Kareem", "Ibrahim"],
};
*/
/////////////////////////////////////////////////////////////////////
//----------------------- Dot vs. Bracket Notation -----------------------
/*
const youssef = {
  firstName: "Youssef",
  lastName: "Mahmoud",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Ahmed", "Kareem", "Ibrahim"],
};
console.log(youssef);

console.log(youssef.lastName);
console.log(youssef["lastName"]);

const nameKey = "Name";
console.log(youssef["first" + nameKey]);
console.log(youssef["last" + nameKey]);

// console.log(youssef.'last' + nameKey)

const interstdIn = prompt(
  "What do you want to know about Youssef? Choose between firstName, lastName, age , job and friends"
);
console.log(youssef[interstdIn]);

if (youssef[interstdIn]) {
  console.log(youssef[interstdIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job and friends"
  );
}

youssef.location = "Egypt";
youssef["twitter"] = "@twitter";
console.log(youssef);

// Challenge
// "Youssef has 3 friends, and his best friend is called Ahmed"

console.log(
  `${youssef.firstName} has ${
    youssef.friends.length
  } friends, and his best friend is called ${
    youssef.friends[0]
  }`
);
*/
/////////////////////////////////////////////////////////////////////
//----------------------- Object Methods -----------------------
/*
const youssef = {
  firstName: "Youssef",
  lastName: "Mahmoud",
  birthYear: 1991,
  job: "teacher",
  friends: ["Ahmed", "Kareem", "Ibrahim"],
  hasDriversLicense: false,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};

console.log(youssef.calcAge());

console.log(youssef.age);
console.log(youssef.age);
console.log(youssef.age);
// console.log(youssef["calcAge"](1991));

// Challenge
// "Youssef is a 46-year old teacher, and he has a driver's license"
console.log(youssef.getSummary());
*/
/////////////////////////////////////////////////////////////////////
//----------------------- Iteration: The for Loop -----------------------
/*
// console.log("Lifting weights repetition 1 🏋️‍♀️");
// console.log("Lifting weights repetition 2 🏋️‍♀️");
// console.log("Lifting weights repetition 3 🏋️‍♀️");
// console.log("Lifting weights repetition 4 🏋️‍♀️");
// console.log("Lifting weights repetition 5 🏋️‍♀️");
// console.log("Lifting weights repetition 6 🏋️‍♀️");
// console.log("Lifting weights repetition 7 🏋️‍♀️");
// console.log("Lifting weights repetition 8 🏋️‍♀️");
// console.log("Lifting weights repetition 9 🏋️‍♀️");
// console.log("Lifting weights repetition 10 🏋️‍♀️");

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}
*/
/////////////////////////////////////////////////////////////////////
//----------------------- Looping Arrays, Breaking and Continuing -----------------------
/*
const youssef = [
  "Youssef",
  "Mahmoud",
  2037 - 1991,
  "teacher",
  ["Ahmed", "Kareem", "Ibrahim"],
  true,
];
const types = [];

// console.log(yousef[0])
// console.log(yousef[1])
// ...
// console.log(yousef[4])
// yousef[5] does NOT exist

for (let i = 0; i < youssef.length; i++) {
  // Reading from youssef array
  console.log(youssef[i], typeof youssef[i]);

  // Filling types array
  // types[i] = typeof youssef[i]
  types.push(typeof youssef[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[[i]]);
}
console.log(ages);

// continue and break
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < youssef.length; i++) {
  if (typeof youssef[i] !== "string") continue;
  console.log(youssef[i], typeof youssef[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < youssef.length; i++) {
  if (typeof youssef[i] === "number") break;
  console.log(youssef[i], typeof youssef[i]);
}
*/
/////////////////////////////////////////////////////////////////////
//----------------------- Looping Backwards and Loops in Loops -----------------------
/*
const youssef = [
  "Youssef",
  "Mahmoud",
  2037 - 1991,
  "teacher",
  ["Ahmed", "Kareem", "Ibrahim"],
  true,
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = youssef.length - 1; i >= 0; i--) {
  console.log(youssef[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for(let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight reptition ${rep} 🏋️‍♀️`)
  }
}
*/
/////////////////////////////////////////////////////////////////////
//----------------------- The while Loop -----------------------
/*
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if(dice === 6) console.log('Loop is about to end...')
}
*/