
// currying function - means just invoke the function differently that's it


// function add(a){
//     return function(b){
//         return a+b;
//     }
// }

// // // normal method to invoke
// // const res = add(5);
// // console.log(res(5))

// // currying method

// const curryingMethod = add(5)(5);
// console.log(curryingMethod)

// infinite currying -------- 
// without making function inside funciton we can just make this and it can hanlde infinite currying
function add(a){
    return function(b){
        if(b) return add(a+b);
        return a;
    }
}
const res = add(5)(5)(6)()
console.log(res);