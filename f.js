// output: node terminal, chrome dev tools
console.log("hello");

// data types: number, string, boolean, undefined, null, bigint, symbol, objects (arrays, dict)
const string = "Hello World!";
const num = 42;
const boolean = true;
const array = [1, 2, 3];
const object = { name: "Charlie", age: 25 };
const nullValue = null;
const undefinedValue = undefined;

console.log(
  typeof string,
  typeof num,
  typeof boolean,
  typeof array,
  typeof object,
  typeof nullValue,
  typeof undefinedValue
);

let obj = {
  fire: "in the hole",
  fun: function () {
    console.log("you can define a function as a value");
  },
};

console.log(obj.fire);
obj.fun();

// control flow: conditionals (if-else, switch-case), loops (for, for-in, for-of, do-while, while), exceptions (try-catch-finally)

// Conditionals
const role = "admin";

if (role === "admin") {
  console.log("Welcome, admin!");
} else if (role === "moderator") {
  console.log("Welcome, moderator!");
} else {
  console.log("Welcome, guest!");
}

switch (role) {
  case "admin":
    console.log("Welcome, admin!");
    break;
  case "moderator":
    console.log("Welcome, moderator!");
    break;
  default:
    console.log("Welcome, guest!");
    break;
}

// Loops
const numbers = [1, 2, 3];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

for (const number of numbers) {
  console.log(number);
}

const person = { name: "Bob", age: 30 };

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

// Exceptions
try {
  throw new Error("Something went wrong");
} catch (error) {
  console.error(error);
} finally {
  console.log("Finally block executed");
}

// operators: + / - * % || && ! | & ^ ** > < = == === ~

// function-scoped: var - hoisting, block-scoped: let, const
function d() {
  h = 1;
}
d();
console.log(h);

// structure: class, function
// class: constructor, properties, private, inheritance, polymorphism
class Animal {
  #id; // private
  constructor(id, name) { // constructor
      this._name = name;
      this.#id = id;
      this._pretendId = id;
  }
  get id() { // properties
      return this.#id;
  }
  get name() {
      return this._name;
  }
  makeSound() {
      console.log('sound');
  }
}
class Dog extends Animal {
  makeSound() {
      console.log('Woof');
  }
}
const a = new Animal(1, "Raccoon");
console.log(a.name);
const dg = new Dog(1, "Chika");
console.log(dg.makeSound());
// function: closures, arrow
function f() {
  console.log('normal function');
}
f();
const af = () => {
  console.log('arrow function');
}
af();
const c = () => {
  console.log('closure function');
  let count = 0;
  return {
      increment: () => { count += 1; },
      getCount: () => count
  };
}
const counter = c();
counter.increment();
console.log(counter.getCount()); // Output: 1
counter.increment();
console.log(counter.getCount()); // Output: 2

// Symbols
const user = { name: 'Alice' };
const metadataA = Symbol('metadata');
const metadataB = Symbol('metadata');
user[metadataA] = { role: 'admin' };
user[metadataB] = { lastLogin: '2023-10-01' };
console.log(user[metadataA]); // Output: { role: 'admin' }
console.log(user[metadataB]); // Output: { lastLogin: '2023-10-01' }
// user['metadataA'] = {role: 'admin'}; I still don't know why I would use symbols :/
console.log(user);

// Maps: ordered, keys can be any type, can't json serialize/de, efficient, size property to find number of keys
const m = new Map();
m.set(1, "first");
m.set(2, 'second');
// size alternate in js
const ob = { 'f': 1, 's': 2, 't': 3 };
console.log(`size of array in objects (alternate of size in maps): ${Object.keys(ob).length}`);

// Filters
const numArr = [1, 2, 3, 4, 5];
const oddNumbers = numArr.filter(num => num % 2 === 1);
console.log(oddNumbers);

// DOM, BOM

// Async, Promises, Callbacks
// callback
const c1 = () => { console.log('callback function called'); };
const c2 = (a, c) => { 
  console.log('inside external function');
  c();
}
c2(1, c1);
// setTimeout, setInterval
setTimeout(() => console.log('timeout'), 1000);
// setInterval(() => console.log('interval'), 1000);
// Promise
function displayer(par) {
  console.log(par);
}
const p = new Promise(function(resolve, reject) {
  // some async code
  let i = 0;
  if (i != 0) {
      resolve('success');
  } else {
      reject('error');
  }
})
p.then(
  function(value) { displayer(value); },
  function(error) { displayer(error); }
);
p.then(value => {
  displayer(value);
}).catch(error => {
  displayer(error);
});

async function asyncfunction() {
  const prom = new Promise(function (resolve, reject) {
      let i = 0;
      resolve(i);
  });
  const k = await prom;
  console.log('k');
}
asyncfunction();

// Events
// onclick, onmouseover, onmouseout, onkeydown, onload, onchange, onscroll

// this

// Modules

// Libraries: Random, Math, Fetch API, jQuery, AJAX, JSON Parsing, Node

// Object, String, Array, Number Methods
// Exception Types
