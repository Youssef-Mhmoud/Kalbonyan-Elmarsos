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
  const description = `${country} has ${population} million people, which is about ${calcPercentage}% of the world.`
  console.log(description)
};

describePopulation('Egypt',170);
describePopulation('Soudi',35);
describePopulation('Palastin',4);
*/
//------------------------------------------
// LECTURE: Introduction to Arrays
/*
const percentageOfWorld3 = (population) => (population / 7900) * 100;

const population = [170, 35, 4, 83];
console.log(population.length === 4);

const percentages = [
  percentageOfWorld3(population[0]),
  percentageOfWorld3(population[1]),
  percentageOfWorld3(population[2]),
  percentageOfWorld3(population[3]),
];
console.log(percentages);

//------------------------------------------
// LECTURE: Basic Array Operations (Methods)
/*
const neighbours = ["Tunes", "Morocco", "Sourya"];

neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);
if (!neighbours.includes("Germany")) {
  console.log("Probably not a central European country :D");
}

neighbours[neighbours.indexOf("Morocco")] = "Republic of
Morocco";
console.log(neighbours);
*/
//------------------------------------------
// LECTURE: Introduction to Objects
// const myCountry = {
//   country: "Egypt",
//   capital: "Cairo",
//   language: "Arabic",
//   population: 170,
//   neighbours: ["Tunes", "Morocco", "Sourya"],
// };
//------------------------------------------
// LECTURE: Dot vs. Bracket Notation

// console.log(
//   `${myCountry.country} has ${myCountry.population} million finnish-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
// );

// myCountry.population += 2
// console.log(myCountry.population)
// myCountry['population'] -= 2
// console.log(myCountry.population)

//------------------------------------------
// LECTURE: Object Methods
/*
const myCountry = {
  country: "Egypt",
  capital: "Cairo",
  language: "Arabic",
  population: 170,
  neighbours: ["Tunes", "Morocco", "Sourya"],

  describe: function () {
    console.log(
      `${this.country} has ${this.population} million finnish-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
    );
  },

  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  },
};

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry)
*/
//------------------------------------------
// LECTURE: Iteration: The for Loop
/*
for(let vot = 1; vot <= 50; vot++) {
  console.log(`Voter number ${vot} is currently voting`)
}
*/
//------------------------------------------
// LECTURE: Looping Arrays, Breaking and Continuing
/*
const percentageOfWorld3 = (population) => (population / 7900) * 100;

const populations = [170, 4, 35, 40]
const percentages2 = []

for (let i = 0; i < populations.length; i++) {
  const per = percentageOfWorld3(populations[i])
  percentages2.push(per)
}

console.log(percentages2)
*/
//------------------------------------------
// LECTURE: Looping Backwards and Loops in Loops
/*
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let y = 0; y < listOfNeighbours[i].length; y++) {
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`)
  }
}
*/
//------------------------------------------
// LECTURE: The while Loop
/*
const percentageOfWorld3 = (population) => (population / 7900) * 100;

const populations = [170, 4, 35, 40]

const percentages3 = []
let i = 0
while(i < populations.length) {
  const per = percentageOfWorld3(populations[i])
  percentages3.push(per)
  i++
}
console.log(percentages3)
*/