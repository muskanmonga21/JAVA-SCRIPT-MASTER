"use strict";

//FUNCTION RETURNING FUNCTION//

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetHey = greet("Hey");
// console.log(greetHey);

greetHey("Neha");
greetHey("Steve");
greet("Hii")("Steven");

const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);
greetArr("Hiee")("Mony");

/////////////////////////////////////////////

//THE CALL, APPLY METHOD AND BIND

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};

lufthansa.book(451, "Ginny Miller");
lufthansa.book(366, "Austin Miller");

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;
// DOES NOT WORK
// book(32, "Sarah Williams");
book.call(eurowings, 23, "Sarah William");
console.log(eurowings);

book.call(lufthansa, 353, "Sheldon Cooper");
console.log(lufthansa);

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "SL",
  bookings: [],
};
book.call(swiss, 324, "Geaorgie Cooper");

//APPLY METHOD
const flightData = [245, "Lia Elizabeth Sadi"];
book.apply(swiss, flightData);
console.log(swiss);
book.call(swiss, ...flightData);

//BIND METHOD

// book.call(eurowings, 23, "Sarah William");

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookSL = book.bind(swiss);

bookEW(32, "Steven");

const bookEW32 = book.bind(eurowings, 2342);
// console.log(bookEW32);

bookEW32("BobbyBrown");
bookEW32("Steve");

// WITH EVENT-LISTNER

lufthansa.plane = 20;
lufthansa.buyPlane = function () {
  console.log(this);
  this.plane++;
  console.log(this.plane);
};

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

//PARTIAL APPLICATION

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.2);
// addVAT = (value) => value + value * 0.2;
// console.log(addVAT);
console.log(addVAT(100));
console.log(addVAT(23));

// IMEDIATELY INVOKED FUNCTION EXPRESSION(IIFE)

const runOnce = function () {
  console.log("This will run only once!!");
};
runOnce();

//IIFE
(function () {
  console.log("This will only run once!!");
  const isPrivate = 23;
});
// console.log(isPrivate);

() => console.log("This will run only once!!");

{
  const isPrivate = 23;
  var norPrivate = 46;
}
// console.log(isPrivate)
console.log(norPrivate);

///////////////////////////////////////////////

//CLOSURE

// 1.

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
console.log(booker);
booker();
booker();
booker();

console.dir(booker);

// 2.

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

// Re-assigning function
h();
f();
console.dir(f);
