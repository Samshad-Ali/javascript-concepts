// debouncing and throtting is not given by js. it achieve by help to settimeout
// means don't call the function again again and again and refuse the unwanted request. just work on the last request

// debouncing
let counter = 0;
function getData() {
  console.log("fetching data", counter++);
}

function Debounce(func, d) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
   timer = setTimeout(() => {
      func();
    }, d);
  };
}

const debounceFunction = Debounce(getData, 1000);

// throtling

const btn = document.getElementById("btn");

function mythrotling(func, delay) {
  return function () {
    btn.disabled = true;
    setTimeout(() => {
      func();
    }, delay);
  };
}

const throtling = mythrotling(() => {
   btn.disabled=false;
  console.log("cliked by user");
}, 2000);
