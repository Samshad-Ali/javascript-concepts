const people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 },
    { name: "Diana", age: 28 },
    { name: "Edward", age: 22 }
  ];

  const arr = [10,9,3,4,5,6,7,8,2,1]

//  these are high order function which means they can take other fnct as a parameter or return a fuction
//   foreach  - iterate over each value and does not return a new array

// people.forEach((item,index)=>{
//     console.log(item)
//     console.log(item.name)
//     console.log(index)
// })

//  map - can iterate of add something and return a new array;

// const map = people.map((item,index)=>{
//     return {
//         ...item,
//         // name:'new', change in whole data name to new
//         // age:500,
//         isLIve:true // add a new value to whole data
//     }
// })

// console.log(map)


// filter - it basically give the array of filtered data upon condition.

const filter = people.filter((item,index)=>{
    return item.age==22;
})
// console.log(filter)

// reduce - it wrap up the whole data and return a new array into singal data

const reduce = arr.reduce((acc,item,index)=>{
    return acc+item;
},0)
// acc is basically in which whole data stored in single vlaue which is initialise with 0 or other
// console.log(res)


// sort  - return a new sorted array

const res = arr.sort((a,b)=>{
    // return a-b asceding
    return b-a; // des
})
// console.log(res)

// sort on basis of age
const res2 = people.sort((a,b)=>{
    // return a.age-b.age;
    // or
    if(a.age<b.age){
        return 1;
    }else{
        return -1
    }
})
console.log(res2)