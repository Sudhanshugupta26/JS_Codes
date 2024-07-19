// Fetch API
// fetch Api provides an interface for fetching resources.
// It use request/response objects.
// fetch() is used to fetch a resouce.
const URL = "https://cat-fact.herokuapp.com/facts"      // a random free api
let para = document.querySelector('#para')
let btn = document.querySelector('#btn')

// fetch() returns a promise.
const getFacts = async () =>{   // an IFFE func to use async await.
    // may it takes time to fetch. that's why we use await.
    // promise is in the format of JSON(mostly) or in XML(rarely).
    // By default the request is GET.
    let promise = await fetch(URL);
    console.log(promise);
    // AJAX is asynchronous JS & XML.
    // JSON is JS Object Notation.
    // json(): method return a 2nd promise that resolves with the result of parsing the
    // the response body text as JSON.(input is JSON, output is JS object)           
    let data = await promise.json()     // this gives the usable data.
    console.log(data)
    console.log(data[0].text)   // this returns the main text info on index 0 of object.
    para.innerHTML=data[0].text
};
btn.addEventListener('click',getFacts);


