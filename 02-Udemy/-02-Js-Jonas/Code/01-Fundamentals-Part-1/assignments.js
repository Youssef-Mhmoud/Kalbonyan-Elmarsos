// LECTURE: VARIABLES AND VALUES

const country = "Egypt";
const continent = "Africa";
let population = 170;

// console.log(country)
// console.log(continent)
// console.log(population)
//------------------------------------------
// LECTURE: DATA TYPES

const isIsland = country === "Egypt";
let language;

// console.log(typeof isIsland)
// console.log(typeof population)
// console.log(typeof country)
// console.log(typeof language)
//------------------------------------------
// LECTURE: LET, CONST, VAR

language = "Arabic";

// ERROR:
// country = 'another'
//------------------------------------------
// LECTURE: BASIC OPERATOR

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
// LECTURE: STRINGS AND TEMPLATE LITERALS
description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

//------------------------------------------
// LECTURE: TAKING DECISIONS: IF/ELSE

// population = 13
// population = 130

// if (population > 33) {
//   console.log(`${country}'s population is above average`)
// } else {
//   console.log(`${country}'s population is ${33 - population} million below average`)
// }

//------------------------------------------
// LECTURE: TAKING DECISIONS: IF/ELSE