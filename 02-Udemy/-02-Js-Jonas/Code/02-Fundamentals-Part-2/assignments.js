//------------------------------------------
// LECTURE: Functions
/*
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const descEgypt = describeCountry("Egypt", "170", "Cairo");
const descSoudiArabia = describeCountry("Soudiarabia", "35", "Elryad");
const descPalastin = describeCountry("Palastin", "4", "Alquds");
console.log(descEgypt, descSoudiArabia, descPalastin);
*/
//------------------------------------------
// LECTURE: Function Declarations vs. Expressions
/*
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const percEgypt1 = percentageOfWorld1(170);
const percSoudi1 = percentageOfWorld1(35);
const percPalastin1 = percentageOfWorld1(4);
console.log(percEgypt1, percSoudi1, percPalastin1);
*/
//------------------------------------------
// LECTURE: Arrow Functions
/*
const percentageOfWorld3 = (population) => (population / 7900) * 100;

const percEgypt3 = percentageOfWorld3(170);
const percSoudi3 = percentageOfWorld3(35);
const percPalastin3 = percentageOfWorld3(4);
console.log(percEgypt3, percSoudi3, percPalastin3);
*/
//------------------------------------------
// LECTURE: Functions Calling Other Functions
/*
const percentageOfWorld3 = (population) => (population / 7900) * 100;

const describePopulation = (country, population) => {
  const calcPercentage = percentageOfWorld3(population);
  return `${country} has ${population} million people, which is about ${calcPercentage}% of the world.`;
};


const percEgypt3 = describePopulation('Egypt',170);
const percSoudi3 = describePopulation('Soudi',35);
const percPalastin3 = describePopulation('Palastin',4);
console.log(percEgypt3, percSoudi3, percPalastin3);
*/
//------------------------------------------
// LECTURE: Introduction to Arrays