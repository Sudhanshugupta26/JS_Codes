// Sync
// code runs in a perticular sequence of instructions given in the program.

console.log(1);
console.log(2);
console.log(3);

// Async
//sometimes imp instructions get blocked due to some previous instructions.
// async codes allows to execute next instructions immediately.
function hello() {
    console.log('hey!')
}
setTimeout(() => {  // this code will wait for 4 sec but further code executes.
    hello();
}, 4000);
console.log(4);
console.log(5);

// Callbacks
// function called by another function in its arguments.
// function as a callback doesn't contain ().

function sum(a,b) {
    console.log(a+b);
}
function calculator(a,b,sum) {  // to call calculator(1,2,sum).
    sum(a,b)
}
setTimeout(hello,2000); //hello is passed as callback.

//callback hell
//Nested callbacks stacked below one another forming a pyramid structure.
function getData(data,getNext) {
    setTimeout(() => {
        console.log("data",data);
        if (getNext) {
            getNext();
        }
    }, 2000);
}
getData(1,()=>{         // callback hell
    getData(2,()=>{     // basically when this pyramid is formed we called it as callback hell.
        getData(3,()=>{
            getData(4);
        })
    })
})

// Promises
// are to cater callback hell.
// it is for eventual completion of task.
// it is an object in js.
// it contains resolve and reject.
let promise = new Promise((resolve, reject) => { // promise have 3 states: pending , fulfilled, rejected
    console.log('i am a promise.')
    resolve(123);
    reject(0);
})

// real code promises
function getData1(data, getNext) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data",data);
            resolve('success')
            if (getNext) {
                getNext();
            }
        }, 5000);
    });
}

//promise.then() will run when promise fulfilled.
//promise.catch() will run when promise rejected.
const getPromise=()=>{
    return new Promise((resolve, reject) => {
        console.log('promise')
        resolve('success');
       // reject('invalid');
    });
}

let prom = getPromise();
prom.then((res)=>{
    console.log(res)
})
prom.catch((err)=>{
    console.log(err)
})

// Chaining Promises:
function asyncFunc() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("some data 1")
            resolve('success')
        },2000);
    });
}
function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("some data 2")
            resolve('success')
        },2000);
    });
}
console.log('fetching 1....')   // this is called promise chaining. 
asyncFunc().then((res)=>{
    console.log('fetching 2....')
    asyncFunc2().then((res)=>{})
})

// Async - Await
// async functions returns a promise.
async function hello() {
    console.log('hello')
}
// await pauses the execution of its surronding async func until the promise is settled.
// await can only be used in async func.

function getNewData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('dataNew',dataId)
            resolve('success')
        }, 2000);
    });
}

async function getAllData() {   // using async await
    await getNewData(1);
    await getNewData(2);        // this shouldn't be run till above await is done.
}
getAllData();                   // we can prevent callback hell more efficently.

// IIFE: immediately Invoked Function Expression
// as in above code we have to make another function(async) and then call it to run.
// But iffe is a func that is called immediately as soon as it is defined.
(async function () {
    await getNewData(3)
    await getNewData(4)
})()                                // this is an IFFE.We can't use it again since it has no name.