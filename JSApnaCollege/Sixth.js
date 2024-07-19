// Functions
let x= 5
function fn1() {
    let x = 7
    console.log("Namaste!",x);
}
fn1();
console.log(x)
function sum(x,y) { // x and y are local variables
    return x+y;
    console.log() // never run after return
}
console.log(sum(3,6));

const fn2 =(a,b)=>{
    console.log(a*b);
}
fn2(4,5);

// question
let fun1 = (x)=>{
    for (const a of x) {
        if (a=='a'||a=='e'||a=='i'||a=='o'||a=='u') {
            console.log(a);
        }
    }
}
fun1('Sudhanshu Gupta')

// forEach in Arrays & callbacks

let arr= [1,23,5,6,7,8]             // forEach used to traverse an array
arr.forEach(function printVal(val) { // printVal() is passed as callback function.
    console.log(val);
})
arr.forEach((val)=> { // same as above but passed as Arrow Function
    console.log(val);
})
let arr2=['delhi','lucknow','gorakhpur']
arr2.forEach((val, indx,arr)=>{
    console.log(val.toUpperCase(),indx,arr)
})
 // Higher Order functions/Methods : functions that has another 
 //function as there parameters or return another function
 //is considered in this category.
 // forEach is higher order function in this case.

 // Some More Array Methods

let newArr=arr.map((val)=>{ // create new array with the results of some ops.
    return val*val;
})
 console.log(newArr); 

 let newArr2 = arr.filter((val)=>{  // create new array with some set of results.
    return val%2==0;
 })
 console.log(newArr2)

 let output = arr.reduce((prev,curr)=>{ // prev is 1st element and curr is 2nd ele then changes happens to prev and curr traverses.
    return prev+curr;   // prev+=curr
 })
console.log(output);

