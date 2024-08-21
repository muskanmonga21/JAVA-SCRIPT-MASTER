'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  // .textcontent = 0
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}</div>
        `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// displayMovements(account1.movements);

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

// const user = 'Steven Thomas Williams'; //stw

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

// calcDisplayBalance(account1.movements);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);
  // Display balance
  calcDisplayBalance(acc);
  // Display summary
  calcDisplaySummary(acc);
};

//EVENT HANDLER

let currentAccount;
btnLogin.addEventListener('click', function (e) {
  //Prevent FORM form submitting
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and Message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;

    containerApp.style.opacity = 100;

    // clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('working');
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  // console.log(amount, receiverAcc);
  // console.log();

  inputTransferAmount.value = inputTransferTo.value = '';
  // console.log(receiverAcc, currentAccount);
  // console.log(amount);
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing The Transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    console.log('done');
    // UPDATE UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movements
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }

  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
  labelWelcome.textContent = 'Log in to get started';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/*
//FOR EACH LOOP

//MAP
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const uniqueCurrencies = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(uniqueCurrencies);

uniqueCurrencies.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});

////////////////////////////////////

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
for (const [i, movement] of movements.entries()) {
  if (movement > 0) console.log(`Movement ${i + 1}: You Deposites ${movement}`);
  else console.log(`Movement ${i + 1}: You Withdraw ${Math.abs(movement)}`);
}

movements.forEach(function (mov, i, arr) {
  if (mov > 0) console.log(`Movement ${i + 1}: You Deposited ${mov}`);
  else console.log(`Movement ${i + 1}: You Withdrew ${Math.abs(mov)}`);
});

/////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];
//SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice());
console.log([...arr]);

// SPLICE
console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT-INATION
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(' - '));

//INDEX
const array = [34, 24, 25];
console.log(arr[0]);
console.log(arr.at(0));

// GETTING LAST ARRAY ELEMENT
console.log(arr[array.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log('Rishi'.at(0));

///////////////////////////////////////////
//DAY - 2

const movementsUSD = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUSD = 1.1;
// const movementUSD = movements.map(function (mov) {
//   return mov * eurToUSD;
// });

const movementUSD = movements.map(mov => mov * eurToUSD);

console.log(movements);
console.log(movementUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUSD);
console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
  (mov, i, arr) =>
    `Movements ${i + 1}: You ${mov > 0 ? 'Deposited' : 'Withdrew'} ${Math.abs(
      mov
    )}`
);

console.log(movementsDescriptions);

// ACCUMULATOR -> SNOWBLL

// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);
// console.log(balance);

const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

//MAXIMUM VALUE

const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);

console.log(max);
*/
/////////////////////////////////////////////
// DAY - 3
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUSD = 1.1;

const totalDepositedUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    // console.log(arr);
    return mov * eurToUSD;
  })
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositedUSD);

const movement = [200, 450, -400, 3000, -650, -130, 70, 1300];

const withdrawal = movements.find(mov => mov < 0);
console.log(withdrawal);

console.log(accounts);
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);
*/

////////////////////////////////////////////
//Day - 4

/*
 const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
 console.log(movements);

//EQUALITY
console.log(movements.includes(-130));

// SOME: CONDITION
console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 50);
console.log(anyDeposits);

// EVERY
console.log(movements.every(mov => mov > 0));

console.log(account4.movements.every(mov => mov > 0));

//SEPRATE CALLBACK
const deposit = mov => mov < 0;
console.log(deposit);
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
*/

///////////////////////////////////////////
//DAY - 5

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);

// const allMovements = accountMovements.flat();
// console.log(allMovements);

// const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

//FLAT
const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

//FLATMAPS
const overalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);

//SORTING ARRAYS

//STRINGS
const owners = ['John', 'Zack', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

// NUMBER
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements.slice());
console.log(movements);
// console.log(movements.sort()); not work

// return < 0, A, B (Keep Order)
// return > 0, B, A (Switch Order)

//ASCENDING
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });

movements.sort((a, b) => a - b);
console.log(movements);

//DESCENDING
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);

//More ways of creating and filling Arrays
const arr1 = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7);
console.log(x);
// console.log(x.map(() => 5));
x.fill(1, 3, 5);
console.log(x);

arr1.fill(23, 2, 6);
console.log(arr1);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

// Array Methods Practice

// 1.
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);
console.log(bankDepositSum);

// 2.
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? count++ : count), 0);

console.log(numDeposits1000);

//SPLICE AND SLICE DIFF.
const array = [2, 4, 1, 6, 7, 9, 3];

// console.log(array.splice(1));
console.log(array.slice(1));
console.log(array);
