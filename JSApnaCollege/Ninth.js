// EVENTS

// The change in the state of an object is known as an Event.
let btn = document.querySelector("#btn1")
btn.onclick = ()=>{             // JS Events.
    let a=5,b=6;                // priority of js event >> priority of inline event.
    console.log(a+b);
}

// Event Object
// It is a special object that has details about the event.
let btn2 = document.querySelector("#btn2")
btn2.onclick = (evt)=>{             // evt is event object.
    console.log(evt);              // all about event
    console.log(evt.type);          // type of event
    console.log(evt.target);        // target value of event
    console.log(evt.clientX, evt.clientY);      // position of event occur.
}

// Event Listeners
// With the help of these we can do multiple functions on a single event.
let btn3 = document.querySelector("#btn3")
btn3.addEventListener('click',(evt)=>{             // 1st para: Event , 2nd para: function that has to happen (callback)
    console.log(evt);        
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);      
})
btn3.addEventListener('click', ()=>{
    let a=5,b=6;
    console.log(a+b);
})
 let handler = ()=>{
    console.log('Handler')
 }
btn3.addEventListener('click',handler) // function handler passed as callback.

btn3.removeEventListener('click',handler) //This functions remove an Event.

//Q1
let btn4 = document.querySelector('#color')
let mode = 'Light'
let change = ()=>{
    if(mode==='Light'){
        mode='Dark'
        document.querySelector('body').style.backgroundColor='black'
    }
    else{
        mode='Light'
        document.querySelector('body').style.backgroundColor='white'
    }
    console.log(mode);
}
btn4.addEventListener('click',change)
