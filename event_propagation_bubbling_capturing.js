
const div = document.querySelector('div');
const btn = document.querySelector('button');

// bubbling- child to parent propogation
//  onclick of btn in html is trigger the div and parents this is called event bubbling means always propogate from child to parent 
// capturing - parent to child propogation // by giving true it works
// div.addEventListener('click',()=>{
//     console.log('cliked')
// },true)

// btn.addEventListener('click',()=>{
//     console.log('btn')
// },true)

div.addEventListener('click',()=>{
    console.log('cliked')
})

btn.addEventListener('click',(e)=>{
    e.stopPropagation(); // means just do the work of btn only don't propagate to parents it help to undisturb other thing
    console.log('btn')
})

