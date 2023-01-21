const dogs = [
  { weight: 22, curfood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curfood: 200, owners: ["Matilda"] },
  { weight: 13, curfood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curfood: 340, owners: ["Micheal"] },
];

// 1.
dogs.forEach((dog) => (dog.recfood = Math.trunc(dog.weight ** 0.75 * 28)));

// 2.
const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"));

console.log(dogSarah);
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curfood > dogSarah.recfood ? "much" : "little"
  }`
);

// 3.
const ownersEatTooMuch = dogs
  .filter((dog) => dog.curfood > dog.recfood)
  .flatMap((dog) => dog.owners);
// .flat();

console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter((dog) => dog.curfood < dog.recfood)
  .flatMap((dog) => dog.owners);
// .flat();

console.log(ownersEatTooLittle);

// 4.
console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much!`);

console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too much!`);

// 5.
console.log(dogs.some((dog) => dog.curfood === dog.recfood));

// 6.
const checkEatingOkay = (dog) =>
  dog.curfood > dog.recfood * 0.9 && dog.curfood < dog.recfood * 1.1;

console.log(dogs.some(checkEatingOkay));

// 7.
console.log(dogs.filter(checkEatingOkay));

// 8.
const dogSorted = dogs.slice().sort((a, b) => a.recfood - b.recfood);
console.log(dogSorted)