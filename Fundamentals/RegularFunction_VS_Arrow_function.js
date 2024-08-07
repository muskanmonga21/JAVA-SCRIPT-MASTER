"use strict";
var firstName = "joe";

const joe = {
  firstName: "Joe",
  year: 2000,
  calcAge: function () {
    console.log(this);
    console.log(2024 - this.year);
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

joe.greet();
console.log(this.firstName);
