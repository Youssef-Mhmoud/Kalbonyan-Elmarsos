'use strict';

/////////////////////////////////////////////////////////////////////
//----------------------- Constructor Functions and the new Operator -----------------------
/*
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const youssef = new Person('Youssef', 2002);
console.log(youssef);

// 1. New {} is created
// 2. functions is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const ahmed = new Person('Ahmed', 2017);
const kareem = new Person('Kareem', 1975);
console.log(ahmed, kareem);

console.log(youssef instanceof Person);

Person.hey = function () {
  console.log('Hey there 👋');
  console.log(this);
};

Person.hey();
////////////////////////
// ---- Prototypes

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

youssef.calcAge();
ahmed.calcAge();

console.log(youssef.__proto__);
console.log(youssef.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(youssef));
console.log(Person.prototype.isPrototypeOf(ahmed));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(youssef.species, ahmed.species);

console.log(youssef.hasOwnProperty('firstName'));
console.log(youssef.hasOwnProperty('species'));

////////////////////////
// ---- Prototypal Inheritance on Built-In Objects

console.log('-----------------------------------');
console.log(youssef.__proto__);
// Object.prototype (top of prototype chain)
console.log(youssef.__proto__.__proto__);
console.log(youssef.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 6, 9, 3]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  // You should probably not do this
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');

console.dir(x => x + 1);
*/
/////////////////////////////////////////////////////////////////////
//----------------------- ES6 Classes -----------------------
/*
// class expression
// const PersonCl = class{}

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

const ismail = new PersonCl('Ismail Khaled', 1996);
console.log(ismail);
ismail.calcAge();
console.log(ismail.age);

console.log(ismail.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
ismail.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizes
// 3. Classes are executed in strict mode

const walter = new PersonCl('Walter White', 1965);

PersonCl.hey()

//////////////////////
// ---- Setters and Getters
const account = {
  owner: 'Youssef',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);
*/
/////////////////////////////////////////////////////////////////////
//----------------------- Object.create -----------------------
/*
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const ali = Object.create(PersonProto);
console.log(ali);
ali.name = 'Ali';
ali.birthYear = 2002;
ali.calcAge();

console.log(ali.__proto__ === PersonProto);

const Ibrahim = Object.create(PersonProto);
Ibrahim.init('Ibrahim', 1979);
Ibrahim.calcAge();
*/
/////////////////////////////////////////////////////////////////////
//----------------------- Inheritance Between "Classes": Constructor Functions -----------------------
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const ahmed = new Student('Ahmed', 2020, 'Computer Science');
ahmed.introduce();
ahmed.calcAge();

console.log(ahmed.__proto__);
console.log(ahmed.__proto__.__proto__);

console.log(ahmed instanceof Student)
console.log(ahmed instanceof Person)
console.log(ahmed instanceof Object)

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
*/
/////////////////////////////////////////////////////////////////////
//----------------------- Inheritance Between "Classes": ES6 Classes -----------------------
/*
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

// const mahmoud = new StudentCl('Mahmoud Ibrahim', 2012)
const mahmoud = new StudentCl('Mahmoud Ibrahim', 2012, 'Compouter Science');
mahmoud.introduce();
mahmoud.calcAge();
*/
/////////////////////////////////////////////////////////////////////
//----------------------- Inheritance Between "Classes": Object.create -----------------------
/*
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const ismail = Object.create(StudentProto);
ismail.init('Ismail', 2010, 'Computer Science');
ismail.introduce();
ismail.calcAge();
*/
/////////////////////////////////////////////////////////////////////
//----------------------- Another Class Example -----------------------
/*
// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)

class Account {
  // 1) Public fields (instances)
  locale = navigator.language;

  // 2) Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected property
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public methods

  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  static helper() {
    console.log('Helper');
  }

  // 4) Private methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Youssef', 'EUR', 1111);

// acc1._movements.push(250);
// acc1._movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
Account.helper();

// console.log(acc1.#movements)
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(100))

// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
*/