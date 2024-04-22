// 1. Reverse a word and sentence -----------------------------------------

// with method
//  resver a word;
// const strReverse=(str)=>{
//     return str.split("").reverse().join("");
// }
// const res = strReverse("hello world");
// console.log(res)

// without method
// const strReverse = (str) => {
//   let newStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     newStr = newStr + str[i];
//   }
//   return newStr;
// };
// const res = strReverse("hello world this is me");
// console.log(res);

//  reverse a string sentenct
// const strReverse = (str) => {
//   return  str.split(" ").map(item=>item.split("").reverse().join("")).join(" ");
// };
// const res = strReverse("hello world this is me");
// console.log(res);

// 2. How to empty an array in js----------------------------------------

// let arr = [1,2,3,34,343,333];
// arr.length =0;
// console.log(arr)

// 3. How to check that is it array or object in code

// const checker=(item)=>{
//   const isArray = Array.isArray(item);
//   if(isArray){
//     return 'It is an ARRAY';
//   }else{
//     return 'It is an OBJECT';
//   }
// }
// const res = checker({});
// const res1 = checker([]);
// console.log(res,res1)

// 4. Check number is Inter or not --------------------------------------

// let a = 3.20;
// if(a%1===0){
//   console.log(`${a} is an Integer`)
// }else{
//   console.log(`${a} is not an Integer`)
// }

// 5. make this work - duplicate the array - [1,2,3] => [1,2,3,1,2,3]

// let arr = [1,2,3];
//  let newArr= arr.concat(arr)
// console.log(newArr)

// 6. Write a function to reverse a number----------------- 456 => 654

// 1 method
// const reverseNumberMethod1=(num)=>{
//   let reverseNum = Number(num.toString().split("").reverse().join(""));
//     return reverseNum;
// }
// // 2 method
// const reverseNumber=(num)=>{
//   let reverseNum = 0;
//   let rem;
//   while(num>0){
//     rem = num%10;
//     reverseNum = reverseNum*10+rem;
//     num = Math.floor(num/10);
//   }
//   return reverseNum;
// }
// // const res = reverseNumberMethod1(234)
// const res = reverseNumber(234)
// console.log(typeof(res),res);

// 7. Write a function to check that is passed string is Palindrome or not sas = sas-----------------------
// or we can use default one like reverse and check
// const palindromeChecker = (str) => {
//   let temp = str;
//   let newStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     newStr +=str[i];
//   }
//   if (temp === newStr) {
//     return "Given String is Palindrome";
//   } else {
//     return "Given String is not Palindrome";
//   }
// };
// const res = palindromeChecker("naman");
// console.log(res);

// 8. Write a function that returns a passed string with letters in alphabetical order---------

// const alphabeticalOrder=(str)=>{
//   return str.split("").sort().join("");
// }
// const res = alphabeticalOrder("naman");
// console.log(res);

// 9. Function to make first letter of word in a sentence upperCase------------------

// const upperCaseMaker = (str) => {
//   const newStr = str.split(" ").map((item) => {
//     return item.charAt(0).toUpperCase() + item.substring(1);
//   }).join(" ");
//   return newStr;
// };
// const res = upperCaseMaker("naman is good boy");
// console.log(res);

// 10. Write function to get the number of occurrences of each letter in string------------

// const countLetter=(str)=>{
//   let obj = {};
//   str.split("").forEach((item)=>{
//     if(obj.hasOwnProperty(item)){
//       obj[item]++;
//     }else{
//       obj[item]=1;
//     }
//   })
//   return obj;
// }
// const res = countLetter("naman");
// console.log(res);

// // 11. loops an array and add all ------------------------------------

// const sumOfarr=(arr)=>{
//   let sum = 0;
//   arr.forEach(item=>sum+=item);
//   return sum;
// }
// const res = sumOfarr([10,20,30,40,50]);
// console.log(res);

// // 12. In array of number and string, only add those members which are not strings ------------------

// var arr = [1,"hello",2,"new",3,4,5,"he","hh"]
// const sumOfarr=(arr)=>{
//   let sum = 0;
//   arr.forEach(item=>{
//     if(typeof item==='number')
//     sum+=item;
//   })
//   return sum
// }
// const res = sumOfarr(arr);
// console.log(res);

//  13. In array of obj remove which is not gender value = male ------------------

var arr = [
  {
    name: "sam",
    gender: "male",
  },
  {
    name: "namira",
    gender: "female",
  },
  {
    name: "aisha",
    gender: "female",
  },
  {
    name: "shad",
    gender: "male",
  },
];
// const filterGender = (arr) => {
//   return arr.filter(item=>item.gender==='male');
// };
// const res = filterGender(arr);
// console.log(res);

// //  14. a function to clone an array ------------------

// const cloneArr = (arr) => {
//   // return [...arr];
//   // or
//   return arr.map(item=> item)
//   // or
//   // let newArr = [];
//   // arr.forEach(item=>newArr.push(item));
//   // return newArr;
// };
// const res = cloneArr([1,2,3,4,5]);
// console.log(res);

//  15. a function to print element in array according to 'n' variable ------------------

// const retrieveArr = (arr = [], n = 1) => {
//   if (arr.length >= n) {
//     // for print from start
//     // for (let i = 0; i < n; i++) {
//     //   console.log(arr[i]);
//     // }
//     // for print from end
//     for (let i = 0; i < n; i++) {
//       console.log(arr[arr.length-1-i]);
//     }
//   }else{
//     console.log('Number should be equal or less than arr length')
//   }
// };
// retrieveArr([1, 2, 3, 4, 5],5);



//  16. Write a program to find the most frequent item of an array------------

// const frequency = (arr) => {
//   let obj = {};
//   arr.forEach(element => {
//       if(obj.hasOwnProperty(element)){
//         obj[element]++;
//       }else{
//         obj[element] = 1
//       }
//   });
//   let ans = Object.keys(obj).reduce((acc,next)=>{
//     return obj[acc] > obj[next] ? acc : next
//   })
//   console.log(ans)
// };
// frequency([1,2,3,4,5,3,3,3,3,4,5,29,29,29,29,29,29,29,29]);



// 17. Write a program to shuffle a array----------------------

const shuffleArray = (arr)=>{
  let maxShuffle = arr.length;
  while(maxShuffle>0){
    let random = Math.floor(Math.random() * maxShuffle);
    maxShuffle--;
    let temp = arr[maxShuffle];
    arr[maxShuffle] = arr[random];
    arr[random] = temp;
  }
  return arr;
}
const res = shuffleArray([1,2,3,4,5,6,7])
console.log(res)