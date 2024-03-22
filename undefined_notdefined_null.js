

// undefined - means the variable get space in call stack (memory) but not assign any value yet.
// notdefined - means the variable is not exist (no space in the memory)
// null - means we don't want to assign and value 
var ab = null;  
console.log(ab)
// console.log(hello) // not defined
// console.log(greeting)   // undefined
// var greeting = 'hello sam';
// console.log(greeting)


// var, let and const------
// var - var is define in global context and accessible before initialise resulting (undefined)
console.log(hello)
var hello = 'hello world'
hello = true
console.log(hello)
// let and const- they are block level. means they can't accessible before initilise giving refernce error because before initilise it is in temporal deadzone.

// const - let can be changed but const need to defined just after initialise and call be changed;
// console.log(a)
let a = 'hey';
a = 2;
console.log(a)

// console.log(b)
const b = 'heyeee';
// b = 'hello';  error cant be change
console.log(b)