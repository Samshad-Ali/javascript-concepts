// prototype means are extra function or method or properties to perform the operation 
// example : array has its own prototype e.g. push , pop etc. ji ha yhi prototype (fancy word of extra propteries or method or function)
const obj = {
    name:"Sam",
    detail:function(){
        return this.name;
    }
}
// console.log(obj)s
//  when obj print it give some extra properties(function) to perform operation is called prototype of object.

const obj2={
    // name:"shad",
    __proto__:obj // making prototype of obj into obj2;
}

// console.log(obj2.detail()) // in this example first it check the name in obj2 then go to upper ojb if not found

// array
// example : array has its own prototype e.g. push , pop etc. ji ha yhi prototype (fancy word of extra propteries or method or function)

const n = [3,4,4,3];
const ni = [1,2];
const nii = [5,6];
// console.log(n.concat(ni,nii))
// console.log(nii.shift())
// console.log(nii)
// console.log(nii.unshift(0))
// console.log(nii)

// self created prototype

// reverse the string in array.

const str =['Samshad'];
// making own prototype or method to perform the calculation
Array.prototype.convertTOObject=function(){
    let obj ={};
   this.forEach((item)=>{
         obj['key'] = item;
    });
    return obj
}


// console.log(str.convertTOObject())

// make own prototype 
function myPrototypeForReverse(name){
    return this.name=name;
}

const myproto = new myPrototypeForReverse('Samshad') // this new myPrototypeForReverse is a constructor here;
console.log(myproto)