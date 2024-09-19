'use strict';

////////////////////////////////////////////
// 1. new {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically returns {}
///////////////////////////////////////////

const Person = function (firstName, birthYear) {
  //   console.log(this);

  //Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //Never do this
  //   this.calacAge = function () {
  //     return 2024 - this.birthYear;
  //   };
};

const jack = new Person('Jack', 2002);
console.log(jack);

const sara = new Person('Sara', 2000);
const lia = new Person('Lia', 1999);
console.log(sara);
console.log(lia);

console.log(jack instanceof Person);

//Prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  return 2024 - this.birthYear;
};

console.log(jack.calcAge());
console.log(lia.calcAge());

console.log(jack.__proto__);

console.log(jack.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jack));

//.prototypeOfLinkedObjects
Person.prototype.species = 'Homo-Sapiens';
console.log(jack.species);
console.log(sara.species);

console.log(jack.hasOwnProperty('firstName'));
console.log(jack.hasOwnProperty('species'));

console.log(jack.__proto__);
// Object.prototype. (top of the prototype chain)
console.log(jack.__proto__.__proto__);
console.log(jack.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 5, 5, 3, 2, 5, 2, 4, 3, 2];
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);

//Class Expression
// const PersonCl = class{};

//Class Declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //This Method will add it to .prototype property
  calcAge() {
    console.log(2024 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
    // console.log(`Hey ${this.birthYear}`);
  }

  get age() {
    return 2024 - this.birthYear;
  }

  //Set a property that already exist
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name.`);
  }

  get fullName() {
    return this._fullName;
  }
}

const jerry = new PersonCl('Jerry Mane', 1998);
console.log(jerry);
jerry.calcAge();
console.log(jerry.age);
jerry.greet();

const georgia = new PersonCl('Georgia Miller', 1996);

console.log(jerry.__proto__ === PersonCl.prototype);

/////////////////////////////////////////////
// 1. Class are NOT hoisted
// 2. class are first-class citizen
// 3. Classes are executed in strict mode
/////////////////////////////////////////////

const account = {
  owner: 'Smile',
  movements: [200, 400, 600, 800, 9000],

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
