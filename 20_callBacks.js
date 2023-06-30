//Example of syncronous Programming;
//const prompt = require("prompt-sync") ({sigint:true})
//let a = prompt("What is your name?")
//let b = prompt("What is your age?")
//let c = prompt("What is your favourite color?")
//
//console.log(a + " is " + b + " years old has " + c + " favorite color. ");

// Asynchronous programing
//console.log("Start");
//setTimeout(function(){
//    console.log("Hey I am Good");
//
//},3000)
//console.log("End");

// CallBacks;
function loadScript(src) {
    let script = document.createElement("script");  
    script.src = src;
    document.body.appendChild(script);
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js")