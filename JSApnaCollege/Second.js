// defining objects
const student = {
    Name :"Sudhanshu Gupta",
    Marks : 459,
    CGPA : 9.3
};
console.log(student.Name);
console.log(student["Name"]);          //this is giving error! if Quotes isn't there.
student.CGPA = 9.0;
console.log(student);

// Practice object.
 const product = {
    name : "Parker Pen",
    rating : 4,
    offer : 0.05,
    price : 250
 };

 let a= 8;
 let b= 89;
 console.log("a = ",a,"& b = ",b);

 //  Comparision operators

 let one = 5;
 let two = 5;
 console.log(one==two);         // != for not in terms of value only.
 console.log(one===two);        // !== for not in tems of type and value both.
 two = "5";
 console.log(one==two);
 console.log(one===two);

 // logical operators

 console.log(one==two && one===two);
 console.log(one==two || one===two);
 console.log(! one===two);

 // conditional statements

 let num =425;
 if(num%3===0){
    console.log("Divisible by 3");
 }else if(num%2==1){
    console.log("remainder 1");
 }else{
    console.log("remainder 2")
 }

 if(5===5)console.log("True");

 // Ternary Operator
let age = 20;
 console.log(age>=18?"Can Vote!":"Can't Vote!");

 // Switch case

 switch (0) {
    case 0:
        console.log("Zero");
        break;
 
    default:
        console.log("Not zero!");
        break;
 }