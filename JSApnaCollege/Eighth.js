// DOM 2

console.log("HELLO")

let div = document.querySelector('div')
let id = div.getAttribute("id") // to get the value of attribute.
console.log(id)
let name = div.getAttribute('name')
console.log(name)
div.setAttribute('id','division') // setting attribute values by JS.
div.style.backgroundColor= "pink"   // changing style attribute by JS.

let b100 = document.createElement('button');
b100.innerText="Click me!"
let div2 = document.querySelector('div')
div2.append(b100)       // append element at element
div2.prepend(b100)      // prepend element at element
div2.before(b100)       // element at end of element
div2.after(b100)        // element at start of element

let p = document.querySelector('p')
p.remove()              // removing a element by JS.

// Q1

let bt0n = document.createElement('button')
bt0n.innerText="CLICK ME!"
bt0n.style.color='white'
bt0n.style.backgroundColor='red'
let body = document.querySelector('body')
body.prepend(bt0n)

// Q2
//if we try to append new class by setAttribute then it changes the previous one but to append we use classList
let para = document.querySelector('section')
console.log(para.classList)      // classList is a list of classes of an element.
para.classList.add('newClass')  // this append a seperate class into classList.
