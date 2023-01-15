'use strict';

//----------------------- Scoping in Practice -----------------------
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Ahmed';

      // Reassignig outer scope's varaible
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Youssef';
calcAge(1991);
// console.log(age)
// printAge();
*/
/////////////////////////////////////////////////////////////////////
//----------------------- Hoisting and TDZ in Practice -----------------------
/*
// Varaibles
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Youssef';
let job = 'teacher';
const year = 1991;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/
/////////////////////////////////////////////////////////////////////
//----------------------- The ( this ) Keyword in Practice -----------------------
/*
console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  // console.log(this);
};
calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const ahmed = {
  year: 2017,
};

ahmed.calcAge = jonas.calcAge;
ahmed.calcAge();

const f = jonas.calcAge;
f()
*/
/////////////////////////////////////////////////////////////////////
//----------------------- Regular Functions vs. Arrow Functions -----------------------
/*
// var firstName = 'Ahmed';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);

  return a + b;
};
addArrow(2, 5, 8);
*/
/////////////////////////////////////////////////////////////////////
//----------------------- Primitives vs. Objects (Primitive vs. Reference Types) -----------------------
/*
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Youssef',
  age: 30,
};

const friend = me;
const nice = friend
friend.age = 27;
console.log('Friend:', friend);
console.log('Me:', me);
*/

/*
// Practice

// Primitive types
let lastName = 'Ismail';
let oldLastName = lastName;
lastName = 'Kareem';
console.log(lastName, oldLastName);

// Reference types
const yasser = {
  firstName: 'Yasser',
  lastName: 'Khaled',
  age: 27,
};
const marriedYasser = yasser;
marriedYasser.lastName = 'Mohamed';
console.log('Before marriage:', yasser);
console.log('After marriage:', marriedYasser);
// marriedYasser = {}

// Copying objects
const yasser2 = {
  firstName: 'Yasser',
  lastName: 'Khaled',
  age: 27,
  family: ['Nour', 'Ali']
};

const yasserCopy = Object.assign({}, yasser2);
yasserCopy.lastName = 'Ibrahim';

yasserCopy.family.push('Mostafa')
yasserCopy.family.push('Moaz')

console.log('Before marriage:', yasser2);
console.log('After marriage:', yasserCopy);
*/