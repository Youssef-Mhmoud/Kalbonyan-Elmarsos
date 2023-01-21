const ckeckDogs = function (dogsIsmail, dogsKareem) {
  const dogsIsmailCorrected = dogsIsmail.slice();
  dogsIsmailCorrected.splice(0, 1);
  dogsIsmailCorrected.splice(-2);
  // dogsIsmail.slice(1, 3);

  const dogs = dogsIsmailCorrected.concat(dogsKareem);
  console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`)
    }
  });
};
// ckeckDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
ckeckDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
