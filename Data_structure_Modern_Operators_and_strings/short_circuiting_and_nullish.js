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

//TOPIC-1 Short Circuiting

//------ OR -------
//Use ANY data type and return ANY data type using short-circuiting

console.log("her" || "Lia");
console.log("" || "Lia");
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || "" || "Hello" || 23 || null);

restaurant.noGuests = 15;

// const guests = restaurant.noGuests ? restaurant.numGuests : 20;
// console.log(guests);

const guests = restaurant.noGuests || 20;
console.log(guests);

//------ AND -------

console.log(0 && "Lia");
console.log(2 && "Lia");
console.log(true && 0);

console.log("Hiiiee" && 21 && null && "Lia");

// Practical Example

if (restaurant.orderPizza) {
  restaurant.orderPizza("Basil", "Bruchetta");
}

restaurant.orderPizza && restaurant.orderPizza("Basil", "Bruchetta");

//TOPIC-2
//Nullish: null and undefined (NOT 0 or '')
//Nullish Coalescing - ??

restaurant.noGuests = 15;

const guests1 = restaurant.noGuests || 20;
console.log(guests1);

//Nullish Coalescing
const guestCorrect = restaurant.noGuests ?? 20;
console.log(guestCorrect);
