'use strict';

// 1. new {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically returns {}

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
