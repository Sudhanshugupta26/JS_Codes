// Classes And Objects
// js objects is an entity having state and behavior.
// they have some sp property called prototype.
const obj = {
    fullName : "Sudhanshu Gupta",
    marks : 92,
    printMarks : function(params) {
        console.log(this.marks);
    }
}

// prototype is itself object.
// it contains some special property and methods.
// it is basically a reference of an object.

const obj2 = {
    school(){
        console.log("KV");
    }
}

obj.__proto__ = obj2;   // making obj2 as prototype of obj.

obj.school();       // calling func of obj2 by prototype

// property name in object and prototype are same then the preference is given to obj property

//Classes
//Classes is a program code template for creating objects.
class Car{
    constructor(){      // constructor() runs when obj is created.
        console.log('creating a car.')
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }

    setBrand(Brand){
        this.Brand=Brand;   // this.Brand is class property where Brand is parameter of function.
        console.log(this.Brand)
    }
}

let buggati = new Car(); // creating obj from class.
let BMW = new Car();

// Inheritance
// passing down properties & methods from parent class to child class.

class parent{
    constructor(){
        this.species= 'homo sapiens'
    }
    hello(){
        console.log("hello");
    }
}

class child extends parent{}    // inheriting parent class in child class.

let obj3 = new child
// Method overriding.
// if a func is in parent and in child also then child func should be prefred.

class person{
    constructor(name){
        console.log('parent')
        this.species='homo sapiens';
        this.name=name;
    }
    eat(){
        console.log('eat');
    }
}

class engineer extends person{
    constructor(name){
        console.log('child')
        super(name);    // super keyword is used to pass value from child to parent class.
        console.log('child')
    }
    work(){
        super.eat() //also used to call parent funcs in child class.
        console.log('solve problem')
    }
}
let engObj=new engineer('Sudhanshu');

// Error handling;
let a =10;
let b=15;
console.log(a+b);
console.log(a+b);
console.log(a+b);
try{                // try takes the error
console.log(a+c);
}
catch(err){         // catch handles the error and err = error occured.
    console.log(err);
}
console.log(a+b);
console.log(a+b);
console.log(a+b);