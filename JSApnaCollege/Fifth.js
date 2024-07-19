// Arrays

let marks = [1,2,3,4,56,7,8];
console.log(marks);
console.log(marks.length);
console.log(typeof marks); //object
console.log(marks[0]);
console.log(marks[100]); //undefined
marks[0]=10; // no error or Mutable.

// looping array
for (let num of marks) {
    console.log(num);
}

// questions
let sum=0
for (const num of marks) {
    sum+=num;
}
console.log(sum)

// methods in arrays
let veggies=["potato",'bhindi','tomato'];
veggies.push('brinjal');
console.log(veggies);
let m =veggies.pop() // add to end
console.log(m);
console.log(veggies) // delete from end
console.log(veggies.toString())
console.log(veggies.concat(marks)) // this a new array not manipulate pre written arrays
veggies.unshift('cauliflower'); // insert from start
console.log(veggies);
let n = veggies.shift() // del from start
console.log(veggies,n)
console.log(veggies.slice(0,2)) // doesn't change original array and this used 
                                // to extract aperticular part of array
let remain = veggies.splice(0,1) // change original array also a 
                                // third arg splice(start index,number of ele to del,replace)
                                // if splice (start indx) only the eles after that 
                                //index and on that indx will be removed.
console.log(veggies,remain)
