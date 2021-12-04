'use strict';

// baked in by default
function counter() {
  let seconds = 0;
  setInterval(() => {
    seconds += 1;
    document.getElementById('app').innerHTML = `<p>Hello Drew</p>`;
  }, 1000);
}

counter();

//https://www.youtube.com/watch?v=Kw5tC5nQMRY  send simple input from front as a web service
  
function sendWsCall(){
 // 4 ways to send: XMLHttpRequest, fetch API, Axios, Jquery -- https://www.youtube.com/watch?v=RG-weA9HUrg

 // fetch request - pass in url sending to, fetch 
 // returns a promise, so use .then to manage response
 window.fetch('https://jsonplaceholder.typicode.com/users')
 .then (response=>{
   console.log(response);
   return response.json();
 }).then (json=>{
   console.log(json);
 })


}

// async approach to fetch
async function asyncFetchReqExample(){
  let response = await fetch('https://jsonplaceholder.typicode.com/users');
  let data = await response.json();
  return data;
}

asyncFetchReqExample.then(response=>{
  console.log(response);
})

// axios web service call - promise based, can be used in node, browser, or vanilla js
// to add put axio version in script tag
// https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.js





  function saveNameFunction() {
    var firstName = document.querySelector("#firstNmId").value;
    var lastName = document.querySelector("#lastNmId").value;
    var email = document.querySelector("#emailId").value;
    var boolean = document.querySelector("#booleanId").value;
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(boolean);
    sendWsCall()
  }
  
  function hideElementFunction() {
    var videoElement = document.querySelector("#videoId");
    if (videoElement.style.display === "none") {
      videoElement.style.display = "block";
    } else {
      videoElement.style.display = "none";
    }
  }
  
// http://127.0.0.1:5500/src/index.html

// interactive background -- https://github.com/VincentGarreau/particles.js/
// https://codepen.io/akey96/pen/oNgeQYX 

