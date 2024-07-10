"use strict";

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
m 