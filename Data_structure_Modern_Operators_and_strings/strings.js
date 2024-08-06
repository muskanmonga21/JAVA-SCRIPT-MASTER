"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Foccacia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "22:00",
    address,
  }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
};

//string 1

const airline = "Tap Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log("B737"[0]);

console.log(airline.length);
console.log("B737".length);

console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("Portugal"));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and D are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "D") console.log("You got the middle seat 🤢");
  else console.log("You got lucky 😎");
};

checkMiddleSeat("09F");
checkMiddleSeat("13B");
checkMiddleSeat("24D");

console.log(new String("Muskan"));
console.log(typeof new String("Muskan"));

console.log(typeof new String("Muskan").slice(1));

const ask = "How you doin?";
console.log(ask.toUpperCase());
console.log(ask.toLowerCase());

//Fix Capitalisation in name

const passenger = "muSkaN";
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

///////////////////////////////////////////////

//Comparing emails

const email = "joey@hey.com";
const loginEmail = "   JoEy@Hey.com   ";

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// REPLACING

const priceGB = "563,78£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS);

const announcement =
  "All passenger come to boarding door 21. Boarding door 23!";

console.log(announcement.replace("door", "gate"));
// console.log(announcement.replaceAll("door", "gate"));

console.log(announcement.replace(/door/g, "gate"));

// Booleans
const plane1 = "Airbus A320neo";
console.log(plane1.includes("A320"));
console.log(plane1.includes("Boeing"));
console.log(plane1.startsWith("Air"));

if (plane1.startsWith("Airbus") && plane1.endsWith("neo")) {
  console.log("Part of the new Airbus family");
}

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun"))
    console.log("You are NOT allowed on board");
  else console.log("Welcome abroad!");
};
checkBaggage("I have a laptop, some Food and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");

//// String Level 3
console.log("a+very+nice+string".split("+"));
console.log("Musjkan Monga".split(" "));

const [firstName, lastName] = "Muskan Monga".split(" ");
const newName = ["Ms.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase())); // HomeWork
  }
  console.log(namesUpper.join(" "));
};

capitalizeName("lia elliazbeth sadi");
capitalizeName("josephin margrette");

// Padding
const message = "Go to gate 21!";
console.log(message.padStart(21, "*").padEnd(26, "+"));

console.log("Bhavya".padStart(21, "*"));

const maskCreditcard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCreditcard(736258432));
console.log(maskCreditcard(6736983638998738));
console.log(maskCreditcard("6738264802628838"));

// REPEAT

const message2 = "Bad Weather... All Departures Delayed...";
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"✈️".repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(12);
