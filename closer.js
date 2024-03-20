// closure -: in javascript if we call the function even after we able to access it variable inside the inner function this is called closure.


// const closure=(a)=>{
//     let c = 5; // lexical scope
//     return inner=(b)=>{
//         return a+b+c;
//     }
// }

// const res = closure(1);
// console.log(res(4))

//  next example

const sum=(a)=>{
    let b = 5;
    return{
        sumoftwo:function(){
            return a+b;
        },
        sumofthree:function(c){
            return a+b+c;
        }
    }
}

const res = sum(5);
console.log(res.sumoftwo(5))
console.log(res.sumofthree(5))