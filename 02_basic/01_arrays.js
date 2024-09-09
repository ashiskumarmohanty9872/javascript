// Arrays******************
//  Shallow copy :-copy of object whose property share the same refrence
//  (jo bhi chnage karoge original copy me chnage hoga)
//  Deep copy :- copy of obj whose property don not share the smae refrence


// Protoytpe :-A prototype is an existing inbuilt functionality in JavaScript.
//  Whenever we create a JavaScript function, JavaScript adds a prototype property
//  to that function. A prototype is an object, where it can add new variables
//  and methods to the existing object

const arr = [0 ,1, 2,3 ,4, "sibun"]
const myArr2 = new Array(0,1,2,3)


// arr.push(5)
// arr.pop()
// arr.unshift(98)
// arr.shift()

const newArr = arr.join()
// console.log(newArr);
// console.log(arr);

// console.log(typeof newArr);
// console.log(typeof arr);

// Splice ,Slice

console.log("A" ,arr);

const arr2 = arr.slice(1,3)
const arr2 = arr.slice(1,-1)

console.log(arr2);

const arr3 = arr.splice(1,3) //Spilice :-@returns — An array containing the elements that were deleted.

console.log(arr3)
console.log(arr);













