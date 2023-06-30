// Problem no.1
/*
let marks = {
    punit: 90,
    harsh:20,
    vanshil: 50,
    raghu: 74

}
for(let i=0; i<Object.keys(marks).length;i++){
    console.log("the marks of " + Object.keys(marks)[i]+ " are "+ marks[Object.keys(marks)[i]])
}
// Problem no.2
for(let key in marks){
    
   console.log("the marks of " + key + " are "+ marks[key])
}
// Problem no.3
const prompt = require("prompt-sync") ({sigint:true})
let cn = 4
let i
while (i!=cn) {
    
    console.log("Try Again!!")
    i= prompt("Enter a correct number")
    
}
console.log("Congrats You have done!!")
*/
// Problem no.4

const mean = (a, b, c, d) => {
  return (a + b + c + d) / 4;
};
console.log(mean(4, 5, 7, 2));
