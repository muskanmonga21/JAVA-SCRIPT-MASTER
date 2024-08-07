"use strict";
console.log(this);

const calcAge = function (birthYear) {
  console.log(2024 - birthYear);
  console.log(this);
};
calcAge(1991);

const calcAgeArrow = (birthYear) => {
  console.log(2024 - birthYear);
  console.log(this);
};
calcAgeArrow(2001);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(2024 - this.year);
  },
};

jonas.calcAge();

const john = {
  year: 2001,
};

john.calcAge = jonas.calcAge;
john.calcAge();

const f = jonas.calcAge;
f();
