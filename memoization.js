// momoization - it an optimization techniques that can be used to reduce time consuming calclulations by saving previous input to something called cache and returning the result from it.

let sum =0;
function calc(n){
    for(let i=1;i<=n;i++){
        sum+=i;
    }
    return sum;
}

const memoize=(fun)=>{
    let cache={};
    return function(...args){
        let n = args[0];
        if(n in cache){
            console.log('from cache')
            return cache[n];
        }else{
            let result = fun(n);
            console.log('first time building cache');
             cache[n] = result; // key value pair like 5 : 15
             return result;
        }
    }
}

// const res = calc(5);
// console.time("time");
// console.log(res)
// console.timeEnd('time');

const efficient = memoize(calc);
console.time("time");
console.log(efficient(5))
console.timeEnd('time');

console.time("timeaftermemoization");
console.log(efficient(5))
console.timeEnd('timeaftermemoization');