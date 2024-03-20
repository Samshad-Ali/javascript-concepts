//  call ;
//  applicable in normal fuction only
const obj = {
    name:"sam",
    age:22,
    print:function(){
        console.log(`name is ${this.name} and age is ${this.age}`)
    }
}

const obj2={
    name:"shad",
    age:25,
    // print :function(){
    //     console.log(this.age)  // not to do use call instead of this
    // }
}
// obj2.print()
// here call comes to picture - if we want to print the details of obj2 then we need to again make the same function like obj but this is so bad and that's why we use call because with the help of call we can actually do the same thing without creating any function of obj2;
//  function borrowing 
// use of this

obj.print()
//  obj which contain that function then function and then call and inside put the obj which data u need to print.
obj.print.call(obj2)  // easy pisy. // we borrow the obj function


//  best way make the function outside that use.
let printDetails=function(state,country){
    console.log(this)
    console.log(`name is ${this.name} and age is ${this.age} from outside which is too good that above `)
    console.log(`Live in ${state} ${country}`)

}

// printDetails.call(obj)
// printDetails.call(obj2)

// with argument pass
printDetails.call(obj,'UP',"India")
printDetails.call(obj2,'Mumbai',"India")



// apply
// instead of giving argument like this we can send with arraylist in apply this is only the difference btw call and apply

printDetails.apply(obj,['Goa','India'])
printDetails.apply(obj2,['Goa','India'])


// Bind
// It is like call but it say don't call the fuction directly just make a copy and invoke

const bindData = printDetails.bind(obj,"Goa","India")
bindData()