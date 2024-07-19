// Taking input from prompt.
let a = prompt("Enter a Number:");      // prompt always take input in the form of string.
console.log(a%5==0?"Divisible By 5":"Not Divisible By 5");

// loops
for (let index = 0; index < 5; index++) {
    console.log("Hello");
}

while (a<50) {
    console.log(a);
    a++;
}

do {
    console.log("Hola!");
} while (a<0);

let str="Sudhanshu";
for (let i of str) {        // For of loop is basically used for strings and array.
    console.log(i);
}

const student = {
    Name :"Sudhanshu Gupta",
    Marks : 459,
    CGPA : 9.3
};

for (let key in student) {          // For in loop are basically used for objects and arrays.
    console.log("key =",key,"Value =",student[key]); // in this key is not in qoutes.
}
