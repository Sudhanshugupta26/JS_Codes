// Strings

let str = "Hello\nEveryone.";
console.log(typeof str);
console.log(str.length);    // the backslash character is considered as 1 character like \n is consider as 1 character.
console.log(str[0]);

let splstr=`this is a template string.`
console.log(typeof splstr);
let a =827;
let b = 992839;
let output = `this is the val of a: ${a} and b: ${b}`;
console.log(output);
 
//string methods
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.trim());
console.log(str.slice(3,8)); // end is exclusive.
console.log(str.concat(splstr));
console.log(str.replace("H","J")); // replace only 1st character encountered.
console.log(str.replaceAll("l","j"));
console.log(str.charAt(8));

// Question
let Name = prompt("Enter Name:");
let passwd = `@${Name}${Name.length}`;
console.log(passwd);