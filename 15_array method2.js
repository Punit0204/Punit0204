let num = [11, 12, 13, 14, 15, 16];
// Delete any number from array we use DELETE;
delete num[3]; // that means it delete 3 indexed value ie.:14;
console.log(num); //array length doesnt compromise it remain same as 6;
console.log(num.length);
let a1 = [1, 2, 3, 4, 5];
let a2 = [6, 7, 8, 9, 10];
let a3 = [11, 12, 13, 14];
/*
// Concat method that add 2 array ;

let newnum = a1.concat(a2,a3);
console.log(newnum);

// Sort: used to sort an array aplhabetically;
let compare = (a,b)=>{
    return a-b;  // assending order 
    // return b-a; for dessending order
}
s.sort();
console.log(s); 
// logic to sort this in assending order
s.sort(compare); // compare must be a fuction onlyy;
console.log(s);

// Reverse: reverse the array
s.reverse();
console.log(s);
*/
// Splice: ADD new itmes in an array and Slice:
// syntax: s.splice(start, no of element add, what to add)
let s = [5, 2, 7, 1, 8, 3, 9, 19, 27, 86, 34];
/*
s.splice(1,4,51,52,53,54); // deleted array elment nd modified source element;
console.log(s);
*/
//splice :  slice out a piece from an array it creates a new array;

let new_s = s.slice(3); // print elements from 3 indexed after creating new array;

console.log(new_s);
