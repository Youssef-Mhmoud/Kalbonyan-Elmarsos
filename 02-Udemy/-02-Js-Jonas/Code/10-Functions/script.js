'use strict';

/////////////////////////////////////////////////////////////////////
//----------------------- Default Parameters -----------------------
/*
const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000)
*/
/////////////////////////////////////////////////////////////////////
//----------------------- How Passing Arguments Works: Value vs. Reference -----------------------
/*
const flight = 'LH234'
const youssef = {
  name: 'Youssef Mahmoud',
  passport: 23473827
}

const checkIn = function(flightNum, passenger) {

  flightNum = 'LH999'
  passenger.name = 'Mr. ' + passenger.name
  if(passenger.passport === 23473827) {
    alert('Check in')
  } else {
    alert('Wrong passport')
  }
}

// checkIn(flight, youssef)
// console.log(flight)
// console.log(youssef)

// Is the same as doing...
// const flightNum = flight
// const passenger = youssef

const newPassport = function(person) {
  person.passport = Math.trunc(Math.random() * 100000000)
}

newPassport(youssef)
checkIn(flight, youssef)
*/
/////////////////////////////////////////////////////////////////////
//----------------------- Functions Accepting Callback -----------------------
/*
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord);
console.log('-----------------------------------');
transformer('Javascript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5);
['Youssef', 'Mahmoud', 'Ahmed'].forEach(high5)
*/
/////////////////////////////////////////////////////////////////////
//----------------------- Functions Returning Functions -----------------------
/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet('Hey');
greeterHey('Youssef');
greeterHey('Ahmed');

greet('Hello')('Youssef');

// Challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('Youssef');
*/
/////////////////////////////////////////////////////////////////////
//----------------------- The call, apply and bind Methods -----------------------
/*
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
lufthansa.book(239, 'Youssef Mahmoud');
lufthansa.book(635, 'Ahmed Mohamed');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Ismail Kareem')

// Call method
book.call(eurowings, 23, 'Ismail Kareem');
console.log(eurowings);

book.call(lufthansa, 239, 'Saber Ahmed');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Ibrahim Yasser');

// Apply method
const flightData = [583, 'Ahmed Osama'];
book.apply(swiss, flightData);
console.log(swiss);

// Preferred to use (Call) method and use spread (...)
book.call(swiss, ...flightData);

// Bind method
// book.call(eurowings, 23, 'Ismail Kareem');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Omar Ahmed');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Youssef Mahmoud');
bookEW23('Hamza Khaled');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;

  console.log(this.planes);
};
// lufthansa.buyPlane()

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVat = (value) => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

// Challenge
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
*/
/////////////////////////////////////////////////////////////////////
//----------------------- Immediately Invoked Function Expressions (IIFE) -----------------------
/*
const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

// IIFE
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();

// console.log(isPrivate)

(() => console.log('This will never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
// console.log(isPrivate)
console.log(notPrivate)
*/
/////////////////////////////////////////////////////////////////////
//----------------------- Closures -----------------------
/*
const secureBooking = function () {
  let passengerCount = 0;

  return function() {
    passengerCount++
    console.log(`${passengerCount} passengers`)
  }
};

const booker = secureBooking()

booker()
booker()
booker()

console.dir(booker)
*/
/////////////////////////////////////////////////////////////////////
//----------------------- More Closure Examples -----------------------
/*
// Example 1
let f;

const g = function () {
  const a = 23;

  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;

  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// Re-assinging f function
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(() => {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000
boardPassengers(180, 3)
*/