// if (js === "amazing") {
//   alert("JavaScript is FUN!");
// }
// 40 + 8 + 23 - 10;
//----------------------- VARIABLES AND VALUES -----------------------
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
//----------------------- DATA TYPES -----------------------
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
//----------------------- LET, CONST, VAR -----------------------
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
//----------------------- BASIC OPERATORS -----------------------
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
//----------------------- STRINGS AND TEMPLATE LITERALS -----------------------
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
//----------------------- TAKING DECISIONS: IF/ELSE -----------------------
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
