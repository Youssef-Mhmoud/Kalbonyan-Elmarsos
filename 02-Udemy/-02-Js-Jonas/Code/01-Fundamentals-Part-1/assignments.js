// LECTURE: Values and Variables

const country = "Egypt";
const continent = "Africa";
let population = 170;

// console.log(country)
// console.log(continent)
// console.log(population)
//------------------------------------------
// LECTURE: Data Types

let isIsland = false;
let language;

// console.log(typeof isIsland)
// console.log(typeof population)
// console.log(typeof country)
// console.log(typeof language)
//------------------------------------------
// LECTURE: let, const and var

language = "arabic";

// const isIsland = false
isIsland = true;

// ERROR:
// country = 'another'
//------------------------------------------
// LECTURE: Basic Operators

let countryHalf = population / 2;

population++;
// console.log(population);

let finlandPopulation = 6;
let myCountryGreaterThanFinland = population > finlandPopulation;
// console.log(myCountryGreaterThanFinland);

let averageCountry = 33;
// console.log(population < averageCountry);

let description =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language;

// console.log(description)
//------------------------------------------
// LECTURE: Strings and Template Literals
description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

//------------------------------------------
// LECTURE: Taking Decisions: if / else Statements

// population = 13
// population = 130

// if (population > 33) {
//   console.log(`${country}'s population is above average`)
// } else {
//   console.log(`${country}'s population is ${33 - population} million below average`)
// }

//------------------------------------------
// LECTURE: Type Conversion and Coercion

// console.log('9' - '5') // 4
// console.log('19' - '13' + '17'); // -> '617'
// console.log('19' - '13' + 17); // -> 23
// console.log('123' < 57) // false
// console.log(5 + 6 + '4' + 9 - 4 - 2) // 1143

//------------------------------------------
// LECTURE: Equality Operators: == vs. ===

// const numNeighbours = Number(
//   prompt("How many neighbour countries does your country have?")
// );

// if (numNeighbours === 1) {
//   console.log("Only 1 border");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }

//------------------------------------------
// LECTURE: Logical Operators

// if (language === 'English' && population < 55 && !isIsland) {
//   console.log(`You should live in ${country} :)`)
// } else {
//   console.log(`${country} does not meet your criteria :(`)
// }

//------------------------------------------
// LECTURE: The switch Statement
/*
switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}
*/
//------------------------------------------
// LECTURE: The Conditional (Ternary) Operator
// population = 13

// console.log(
//   `${country}'s population is ${population > 33 ? "above" : "below"} average`
// );
