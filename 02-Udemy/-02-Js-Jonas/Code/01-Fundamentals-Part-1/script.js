// if (js === "amazing") {
//   alert("JavaScript is FUN!");
// }
// 40 + 8 + 23 - 10;
//----------------------- Values and Variables -----------------------
/*
let js = "amazing";
// console.log(40 + 8 + 23 - 10);

console.log("Youssef");
console.log(23);

let firstName = "Mahmoud";
// let first = "Youssef";
// let firstNamePerson;
// let first_name_person;

console.log(firstName);
console.log(firstName);
console.log(firstName);


ERROR:
- let 3years = 3;
- let youssef&mahmooud = 'YM';
- let new = 27;
- let function = 27;

PREFER DON'T USE
- let name = 27;

IN OOP
- let Person = "youssef"


// variable name conventions
let youssef_mahmooud = "YM";
let $fucntion = 27;

let person = "youssef";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentjob = "Teacher";

let job1 = "Programmer";
let job2 = "Teacher";

console.log(myFirstJob)
*/
/////////////////////////////////////////////////////////////////////
//----------------------- Data Types -----------------------
/*
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

// console.log(typeof true);
console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Youssef");

javaScriptIsFun = "YES!";
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null)
*/
/////////////////////////////////////////////////////////////////////
//----------------------- let, const and var -----------------------
/*
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer'
job = 'teacher'

lastName = 'Mahmoud'
console.log(lastName)
*/
/////////////////////////////////////////////////////////////////////
//----------------------- Basic Operators -----------------------
/*
// Math operators
const now = 2037;
const ageYoussef = now - 1991;
const ageAhmed = now - 2018;
console.log(ageYoussef, ageAhmed);

console.log(ageYoussef * 2, ageYoussef / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Youssef";
const lastName = "Mahmoud";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x + 4 = 100
x++; // x = x + 1
x--; // x = x - 1
x--; // x = x - 1
console.log(x);

// Comparison operators
console.log(ageYoussef > ageAhmed); // >, <, >=, <=
console.log(ageAhmed >= 18);

const isFullAge = ageAhmed >= 18;

console.log(now - 1991 > now - 2018);
*/
/*
const now = 2037;
const ageYoussef = now - 1991;
const ageAhmed = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageYoussef + ageAhmed) / 2;
console.log(ageYoussef, ageAhmed);
*/
/////////////////////////////////////////////////////////////////////
//----------------------- Strings and Template Literals -----------------------
/*
const firstName = "Youssef";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const youssef =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(youssef);

const youssefNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(youssefNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines')

console.log(`String
multiple
lines`)
*/
/////////////////////////////////////////////////////////////////////
//----------------------- Taking Decisions: if / else Statements -----------------------
/*
const age = 15;
// const isOldEnough = age >= 18;

if (age >= 18) {
  console.log("Ahmed can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Ahmed is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
*/
/////////////////////////////////////////////////////////////////////
//----------------------- Type Conversion and Coercion-----------------------
/*
// type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Youssef"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");

let n = "1" + 1; // '11'
n = n - 1;
console.log(n)

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Youssef"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

let height = 0;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
*/
/////////////////////////////////////////////////////////////////////
//----------------------- Equality Operators: == vs. === -----------------------
/*
const age = "18";
if (age === 18) console.log("You just became an adult :D (strict)");

if (age == 18) console.log("You just became an adult :D (loose)");

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
}  else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}

if(favourite !== 23) console.log('Why not 23?')
*/
/////////////////////////////////////////////////////////////////////
//----------------------- Logical Operators -----------------------
/*
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Ahmed is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Ahmed is able to drive!");
} else {
  console.log("Someone else should drive...");
}
*/
/////////////////////////////////////////////////////////////////////
//----------------------- The switch Statement -----------------------
/*
const day = "friday";

switch (day) {
  case "monday": // day === 'monday'
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day!");
}
*/
/////////////////////////////////////////////////////////////////////
//----------------------- Statements and Expressions -----------------------
/*
// Expressions
3 + 4;
1991;
true && false && !false;

// Statements
if (23 > 18) {
  const str = "23 is bigger";
}
const me = "Youssef";
console.log(`i'm ${2037 - 1991} years old ${me}`);
*/
/////////////////////////////////////////////////////////////////////
//----------------------- The Conditional (Ternary) Operator -----------------------
// const age = 23;
//  age >= 18
//    ? console.log("I like do drink water 💧")
//    : console.log("I like to drink juice 🧃");

// const drink = age >= 18 ? "water 💧" : "juice 🧃";
// console.log(drink);

// let drink2;
// if (age >= 18) {
//   drink2 = "water 💧";
// } else {
//   drink2 = "juice 🧃";
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? "water 💧" : "juice 🧃"}`);
