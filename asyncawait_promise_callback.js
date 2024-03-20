// callback ----------
//  Callback: A callback is a function passed into another function as an argument, which is then executed inside the outer function to complete some kind of routine or action. It's a way to ensure that certain code doesn't execute until a task has finished.

// . Callback Hell: Callback hell, also known as "Pyramid of Doom," occurs when callbacks are nested within callbacks multiple times. This leads to code that is hard to read and maintain due to the nesting.

// promises--------------------
//  Promises: A Promise is an object representing the eventual completion or failure of an asynchronous operation. It can be in one of these states: pending, fulfilled, or rejected. Promises are used to avoid callback hell and make asynchronous code cleaner and more readable.

// Promise chaining : It is a way to execute a sequence of asynchronous tasks one after another using promises. Each .then() receives the result of the previous promise and can return a new value or another promise that will be resolved in the next .then().

// async await--------------
// . Async/Await: async and await are extensions of promises that simplify working with asynchronous functions. An async function always returns a promise, and await is used to pause the execution until that promise settles. This makes the code look synchronous and easier to understand.

const arr = ["sam", "shad", "umar", "kaif"];

function getData() {
  setTimeout(() => {
    let out = "";
    console.log(arr);
    arr.forEach((arr, i) => {
      out += `<li>${arr}</li>`;
    });
    document.body.innerHTML = out;
  }, 1000);
}

// function createData() {
//   setTimeout(timeoutfuction, 2000);
// }

// const timeoutfuction = () => {
//   let naya = "newname";
//   arr.push(naya);
//   console.log(arr);
// };
// createData();
// getData();

//  here the problems is we have to call create and the get (we can do but in fetching its so irritating)

// callback

// function createData(newData,callback) {
//    arr.push(newData);
//    callback()
//   }

// createData('helo',getData)

// promise

function createData(newData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      arr.push(newData);
      let error = false;
      if (error) {
        reject("golmaal h bhai");
      } else {
        resolve();
      }
    }, 1000);
  });
}

// const res = createData("helloji").then(getData).catch((err)=>{console.log(err)});
// console.log(res)


// async await

async function wrapper(){
    await createData('sp');
     getData();
}   

wrapper()