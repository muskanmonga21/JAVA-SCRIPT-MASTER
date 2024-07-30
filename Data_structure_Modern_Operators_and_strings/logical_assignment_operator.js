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

const restaurant1 = {
  name: "kaprese",
  numGuests: 0,
};

const restaurant2 = {
  name: "La Piazza",
  owner: "Oleksender",
};

// OR assignment operator

// restaurant1.numGuests = restaurant1.numGuests || 10;
// restaurant2.numGuests = restaurant2.numGuests || 10;

// restaurant1.numGuests ||= 10;
// restaurant2.numGuests ||= 10;

// nullish assignment operator (null or undefined)

restaurant1.numGuests ??= 10;
restaurant2.numGuests ??= 10;

// AND assignment operator

// restaurant1.owner = restaurant1.owner && "<ANONYMOUS>";
// restaurant2.owner = restaurant2.owner && "<ANONYMOUS>";

restaurant1.owner &&= "<ANONYMOUS>";
restaurant2.owner &&= "<ANONYMOUS>";

console.log(restaurant1, restaurant2);
