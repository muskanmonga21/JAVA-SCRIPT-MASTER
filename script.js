/*
console.log("muskan");
console.log(26);

let firstName = "john";
let first = "bob";

//let firstNamePerson
//let first_name_person

console.log(firstName);
console.log(firstName);
console.log(firstName);

// let 3years = 3;
// let a&b =

let person = "Muskan";
let PI = 3.1415;

let myFirstJob = "student";
let myCurrentJob = "program";

let job1 = "student";
let job2 = "program";
*/

///////////////////////////////////////////////////////

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof true);
console.log(typeof 23);
console.log(typeof "jonas");

javascriptIsFun = "Yes!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

console.log(typeof null);
*/

///////////////////////////////////////////////

/*
// let const var
let age = 21;
age = 25;

const birthYear = 1995;
// birthYear = 1990;

var job = "student";
job = "program";

lastName = "Muskan";
console.log(lastName);
*/

///////////////////////////////////////////////

/*
// arithmetic
const now = 2040;
const ageMuskan = 2024 - 2002;
const ageBob = 2024 - 2005;
console.log(ageMuskan, ageBob);
console.log(ageMuskan * 2, ageBob / 2, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
const firstName = "Muskan";
const lastName = "Monga";
console.log(firstName + " " + lastName);
// assignment operator
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
console.log(x);
// comparison operator
console.log(ageMuskan > ageBob); // >,<,>=,<=
console.log(ageBob >= 18);
console.log(now - 1995 > now - 2020);
console.log(7 / 7 + 7);
*/

///////////////////////////////////////////////

/*
const firstName = "Muskan";
const job = "student";
const birthYear = 2002;
const year = 2024;
const muskan =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(muskan);
const muskanNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(muskanNew);
console.log(`just a regular string...`);

console.log(
  "String with \n\
    multiple \n\
    lines"
);

console.log(`String 
    multiple
    lines`);
*/

///////////////////////////////////////////////

/*
const age = 15;
const isOldEnough = age >= 18;

if (age >= 18) {
  console.log("Sarah can start driving lessons🚗");
} else {
  const yearLeft = 18 - age;
  console.log(`Sarah is too young. wait another ${yearLeft} years :)`);
}

const birthYear = 2002;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
*/

///////////////////////////////////////////////

/*
// type conversion
const inputYear = "1995";
console.log(inputYear);
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Muskan"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log("I am " + 23 + " years old");

console.log("23" + "10" + 3);
console.log("23" - "10" - 3);

let n = "1" + 1;
n = n - 1;
console.log(n);
*/

////////////////////////////////////////////

/*
// 5 falsy values: 0, '', undefined, null, NaN

const money = 100;
if (money) {
  console.log("Don't Spend it all ;)");
} else {
  console.log("You should get a job!");
}

let height;
if (height) {
  console.log("Yay! Height is DEFINED");
} else {
  console.log("Height is UNDEFINED");
}
*/

//////////////////////////////////////////////

/*
const age = "18";
if (age === 18) console.log("You just become an adult :D (strict)");
if (age == 18) console.log("You just became an adult :D (loose)");

const favourite = Number(prompt("What's your favourite number ?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool Number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}

if (favourite !== 23) console.log("why not 23?");
*/

////////////////////////////////////////////////

/*
//logical operator
const hasDriverLicense = true;
const hasGoodVision = false;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

if (hasDriverLicense && hasGoodVision) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else shold drive");
}

const isTired = true;
console.log(hasDriverLicense && hasGoodVision && isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}
*/

//////////////////////////////////////////////////////

/*
const day = "sunday";

switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thrusday":
    console.log("Record videos");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thrusday") {
  console.log("Record videos");
} else if (day === "friday" || day === "saturday") {
  console.log("edit all the video");
} else {
  console.log("FUN DAY!!!");
}
*/

//////////////////////////////////////////////////////////

/*
3 + 4;
1991;
true && false && !false;

if (23 > 10) {
  const str = "23 is bigger";
}

const me = "Muskan";
console.log(`I'm ${2040 - 1995} years old ${me}`);

*/

//////////////////////////////////////////////////////////

/*
const age = 21;
const drink =
  age >= 18
    ? console.log("I like to drink Wine 🍷")
    : console.log("I like to drink water 💦");

console.log(`I Like to drink ${age >= 18 ? "wine 🍷" : "Water 💦"}`);
*/
