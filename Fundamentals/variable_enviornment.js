// variables
console.log(me);
// console.log(job);
// console.log(year);

var me = "Mony";
let job = "creater";
const year = 2002;

// functions

console.log(addDecl(2, 3));
// console.log(addExpr(2,3));
// console.log(addArrow(2,3));

function addDecl(a, b) {
  return a + b;
}

var addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Examples
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log("All Products deleted!");
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
