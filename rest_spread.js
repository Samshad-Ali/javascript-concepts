// Rest and spread Operator.
// --------in array
// Rest - which take the data and wrap up;
function add(f, s, t, ...others) {
  console.log(f, s, t);
  console.log(others);
  console.log(arguments);
}

// add(1,2,3,4,5)

// spread - which take the data and spread;
var names = ["sam", "ajay", "saif", "kaif", "new"];
function addN(f, s, t, ...others) {
  // here we wrap the data
  console.log(f, s, t);
  console.log(others);
}
// addN(...names) // here we spread the data

// in objects-------------

const std = {
  name: "sam",
  age: 22,
  hobbies: ["cooking", "talking"],
};

// using rest
const { age: myage, ...others } = std; // destructuring the data.
// console.log(myage)
// console.log(others)  // we wrap up other data in others.

// const std2=std;
// std.name='he'
// console.log(std) // it also change bcoz the new object also point out the same (referense are same)
// console.log(std2.name)
// console.log(std2)

// if we want to change something then we need (spread)

const std2 = {
  ...std,
  age: 3,
};
// console.log(std)
// console.log(std2)

// ------- others important queries ques------------------
let a = 3 + "33";
let ab = 3 * "3";
let abc = 3 * "st";
console.log(typeof a, a); // 333 bcoz here the assignment is just act like contactinate the values
console.log(typeof ab, ab); // it converts string (if string a number otherwise show NaN) in number then calculate
console.log(abc); // NaN (type number)
// every assignment do the same first convert the value in number then perform the operation except (+)

function wrapper() {
  const res = 20 + 4;
  return function show() {
    console.log("e", res);
    return res;
  };
}

//  const rs = wrapper();
//  console.log(rs())
const rs = wrapper()(); // new way to call the inside fucntion
console.log(rs);

//  need to comment above then run it works
// // iffi
// (function iffi() {
//     console.log('hello this iffi- it invokes the function at the same time. This is the syntax.');
//     return 9 + 9;
// })();

// normal function or arrow function
// note - in normal function this is point to that particular function but in arrow function it's have no this of its own in this this point the Dom directly in object
// it also behave like variable which can't be invoke before initialization but in formal function does due to hoisting

const obj = {
  name: "sam",
  print: () => {
    console.log(this.name);
    console.log(this);
  },
};
const obj1 = {
  name: "sam",
  print: function () {
    console.log(this.name);
    console.log(this);
  },
};

obj.print();
obj1.print();

//  high order funciton
// A high-order function is essentially a function that can take other functions as arguments and/or return a function. ke map, filter, reduce

function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const timesTwo = multiplier(2);
console.log(timesTwo(5));
