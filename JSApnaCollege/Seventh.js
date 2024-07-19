// DOM
// Document Object Model
// We can access HTML code through JS by this.
// script tag should always be present at the end of the body tag
// otherwise it will not contains the DOM tags.
//alert("Hey!")
// window.document prints the html of our page in console.
console.log(window.document)
console.dir(document.body) // since window is global object
console.log(document.body)  
// dir through the object of that part and log throughs the html part.
console.log(document.getElementById("heading")) // h1
console.dir(document.getElementById("heading"))
console.log(document.getElementsByClassName("header")) // accessing by class
console.dir(document.getElementsByClassName("header"))
console.dir(document.getElementsByTagName('p')) // accessing by tagname
console.log(document.getElementsByTagName('p'))
console.dir(document.querySelector('p')) // also access by class ('.class') and by id ('#id').
console.dir(document.querySelectorAll('p')) 
console.log(document.querySelector('p').children)

//Q1
let h2 = document.querySelector("h2") //accessing the element
console.dir(h2)
h2.innerText = h2.innerText + " is learning" // appending text by javaScript

//Q2
let boxes = document.querySelectorAll(".Box")   // selecting all boxes through class
console.dir(boxes)
boxes[0].innerText="Some Text." //adding text to div 1.
boxes[1].innerText="Some Text."
boxes[2].innerText="Some Text."
// Second and js approach to do Q2
let divs = document.querySelectorAll(".Box2")
console.dir(divs)
let i=1
for (div of divs){
    div.innerText=`Inner Text ${i}`
    i++
}