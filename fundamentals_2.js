"use strict";
/*
let hasDriverLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriverLicense) console.log("I can drive :D");

// const interface = "Audio";
//  const private = 543;

function logger() {
  console.log("My name is muskan");
}

// Calling / Running / Invoking Function
logger();
logger();
logger();
logger();

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function cutFruitProcessor(apples, oranges) {
  const applesPeices = cutFruitPieces(apples);
  const orangesPieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applesPeices} Pieces of apples and ${orangesPieces} peices oranges.`;
  return juice;
}

console.log(cutFruitProcessor(2, 4));

//const appleJuice = fruitProcessor(5,0);
// console.log (appleOrangeJuice);

//const appleOrangeJuice = fruitProcessor(2,4);
//console.log(appleOrangesJuice);

/////////////////////////////////////////////////////////

/*
//FUNCTION DECLARATION
console.log(calcAge1(2002));
function calcAge1(birthYear) {
  return 2035 - birthYear;
}

const age1 = calcAge1(1995);

//FUNCTION EXPRESSION
//console.log(calcAge2(1255));

const calcAge2 = function (birthYear) {
  return 2035 - birthYear;
};
const age2 = calcAge2(1995);
console.log(age1, age2);
*/

////////////////////////////////////////////////////
/*
//ARROW FUNCTION

const calcAge3 = (birthYear) => 2037 - birthYear;
//const age3 = calcAge3(1991);
//console.log

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = calcAge3(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
  // return retirement;
  //   return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1995, "many"));
console.log(yearsUntilRetirement(1970, "bob"));
*/
////////////////////////////////////
/*
const freind1 = "Mike";
const freind2 = "Joe";
const freind3 = "Pete";

const freinds =["Mike","Joe","Pete"];
console.log(freinds);

const years = new Array(1991, 1986, 2000, 2008);
console.log(years);

console.log(freinds[0]);
console.log(freinds[0]);
console.log(freinds[1]);
console.log(freinds[2]);

console.log(freinds.length);
console.log(freinds[freinds.length-1]);

freinds[2]= "Steve";
console.log(freinds);
// freinds = ["bob", "tom"];

const firstName = "Mony";
const Mony = [firstName, "Sadi", 2024-2000, "Creater", freinds];
console.log(Mony);

//EXERCISE
const calcAge = function(birthYear) {
  return 2030 - birthYear;
};

const year =[1990, 1967, 2002, 2008, 2016];

// console.log(calcAge(year));

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length-1]);

console.log(age1,age2,age3);
const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
*/
///////////////////////////////////////
/*
//ADD ELEMENTS
const friends = ["Micheal", "Steven", "Peter"];
const newLength = friends.push("Jay"); //last
console.log(friends);
console.log(newLength);

friends.unshift("John"); //first
console.log(friends);

//REMOVE ELEMENTS
// friends.pop();
const popped = friends.pop(); // last
console.log(popped);
console.log(friends);

console.log(friends.shift()); // first
console.log(friends);


console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));
console.log(friends);

if (friends.includes("Steven")) {
  console.log("You have a friend called steven");
}

const monyArray = [
  "Mony",
  "Sadi",
  2024-2000,
  "Creater",
  ["Micheal", "Steven", "Peter"],
];

console.log(monyArray);

const mony = {
  firstName: "Mony",
  lastName: "Sadi",
  age: 2024 - 2000,
  job: "Creater",
  friends: ["Micheal", "peter", "Steven"],
};

console.log(mony);

console.log(mony.lastName);
console.log(mony["lastName"]);

const namekey = "Name";
console.log(mony["first" + namekey]);
console.log(mony["last" + namekey]);
// console.log(mony.'first' + namekey);

const intrestedIn = prompt(
  "what do you want to know about mony? Choose between firstName, lastName, age, job, and friends"
);

if (mony[intrestedIn]) {
  console.log(mony[intrestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}

mony.location = "Sydney";
mony["linkedin"] = "@monysadii";
console.log(mony);


// Challenge
// "Mony has 3 friends, and his best friend is called micheal"

console.log(
  `${mony.firstName} has ${mony.friends.length} friends, and his best friend is called ${mony.friends[2]}`
);
*/
///////////////////////////////////////////////
/*
const mony = {
  firstName: "Mony",
  lastName: "Sadi",
  birthYear: 2000,
  job: "Creater",
  friends: ["Micheal", "peter", "Steven"],
  hasDriverLicense :false,

  calcAge: function(){
    console.log(this);
    this.age= 2024- this.birthYear;
    return this.age;
  },

  getSummary: function(){
    return `${this.firstName} is a ${this.calcAge()}-years old ${
      this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },

};
// console.log(mony.age);
console.log(mony.getSummary());

// Challenge
//"Mony is a 24-year old Creater, and he has a driver's license"

// console.log(mony.calcAge(1998));
// console.log(mony["calcAge"](1999));

console.log(mony.calcAge());
console.log(mony.age);
console.log(mony.age);
console.log(mony.age);
*/
///////////////////////////////////////////////

/*
// console.log("Lifting weight repetition 1 🏋️");
// console.log("Lifting weight repetition 2 🏋️");
// console.log("Lifting weight repetition 3 🏋️");
// console.log("Lifting weight repetition 4 🏋️");
// console.log("Lifting weight repetition 5 🏋️");
// console.log("Lifting weight repetition 6 🏋️");
// console.log("Lifting weight repetition 7 🏋️");
// console.log("Lifting weight repetition 8 🏋️");
// console.log("Lifting weight repetition 9 🏋️");
// console.log("Lifting weight repetition 10 🏋️");

// for loop keeps running while consition is true.
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weight repetition ${rep} 🏋️`);
}

const monyArray = [
  "Mony",
  "Sadi",
  2024-2000,
  "Creater",
  ["Micheal", "Steven", "Peter"],
  true,
];

const types =[];

for (let i = 0; i < monyArray.length; i++) {
  // Reading from mony array
  console.log(monyArray[i], typeof monyArray[i]);

  // Filling types array
  // types[i] = typeof monyArray[i];
  types.push(typeof monyArray[i]);
}

console.log(types);


const years = [1991, 2001, 2002, 2003, 2004];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2030 - years[i]);
}

console.log(ages);

// continue and break

console.log("--- ONLY STRINGS ---");
for (let i = 0; i < monyArray.length; i++) {
  if (typeof monyArray[i] !== "string") continue;
  console.log(i);
  console.log(monyArray[i], typeof monyArray[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < monyArray.length; i++) {
  if (typeof monyArray[i] === "number") break;

  console.log(monyArray[i], typeof monyArray[i]);
}
*/
////////////////////////////////////////////

const mony= [
  "Mony",
  "Sadi",
  2024-2000,
  "Creater",
  ["Micheal", "Steven", "Peter"],
  true,
];

console.log(mony);


for (let i = mony.length - 1; i >= 0; i--) {
  console.log(i, mony[i]);
}


for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️`);
  }
}


let rep = 1;
while (rep <= 10) {
  console.log(`WHILE: Lifting weight repetition ${rep}🏋️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end....");
}