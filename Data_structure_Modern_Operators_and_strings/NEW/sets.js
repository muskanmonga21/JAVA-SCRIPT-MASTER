"use strict";

const orderSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
  "Bruchetta",
  "Risotto",
]);

console.log(orderSet);

console.log(new Set("LiaElizabethSadi"));

console.log(orderSet.size);
console.log(orderSet.has("Pizza"));
console.log(orderSet.has("Bread"));

orderSet.add("Spaghetti");
orderSet.add("Spaghetti");
orderSet.add("Spaghetti");

// orderSet.clear();
console.log(orderSet);

for (const order of orderSet) console.log(order);

// Example

const staff = [
  "Waiter",
  "Chef",
  "Waiter",
  "Manager",
  "Chef",
  "HeadChef",
  "Cleaner",
  "HeadChef",
  "Cleaner",
];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(
  new Set([
    "Waiter",
    "Chef",
    "Waiter",
    "Manager",
    "Chef",
    "HeadChef",
    "Cleaner",
    "HeadChef",
    "Cleaner",
  ]).size
);

console.log(new Set("Muskan").size);
