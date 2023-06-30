let num = [3, 45, 67, 89, 90];
/*
for(let i=0; i<num.length; i++){
    console.log(num[i]);
}
*/
// FOr each loop
num.forEach((element) => {
  console.log(element * element);
});
// Array from: Used to create an array from any other object;
let name = "Punit";
let arr = Array.from(name);
console.log(arr);

// FOR of: give value of array
for (let i of num) {
  console.log(i);
}

// FOR In:  give keys of array
for (let i in num) {
  console.log(i);
}
