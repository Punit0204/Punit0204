let num = [1, 2, 3, 4, 5];
let b = num.toString();
console.log(b);
let c = num.join("_");
console.log(c, typeof c);
// POP : It remove the last or latest element from a array
let r = num.pop();
console.log(num); // Returns poped value feom an array

// PUSH : It add a new element to the end of an array
let p = [23, 24, 25, 26];
let e = p.push(27);
console.log(p);

// Shift: Removes first element and returns
let x = p.shift();
console.log(x); // returns the removed value of an array
console.log(p); // returns the value with shift method;

// Unshift: ADD element at beginning returns new array length;

let y = p.unshift(22);
console.log(y); // returns the new array length
console.log(p); // returns the value with unshift method;
console.log(p, p.length);


