//Map: creates a new array by performing some operation on each array element;
/*let arr1 = [12,14,16,18,20];
//console.log(arr);
let a1 = arr.map((value, index, array)=>{
    console.log(value, index,array);
    return value+1;
})
console.log(a1);
// For ecah does opertion on existing array whereas MAP creates new array by performing Operation on it;

//Array Filter Method;
let arr2 = [12,14,16,18,20];
let a2= arr.filter((value)=>{
    return value>14;
})
console.log(a2); // arr is not goin to change;
*/

// Reduced Method

let arr3 = [11, 22, 33, 44, 55];
let a3 = arr3.reduce((value1, value2) => {
  return value1 + value2;
});
console.log(a3);

// can be also done by creating function as variable;
const reduce_func = (v1, v2) => {
  return v1 + v2;
};
let newa3 = arr3.reduce(reduce_func);
console.log(newa3);
