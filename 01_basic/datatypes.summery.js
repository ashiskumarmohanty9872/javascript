// #  PRIMITIVE (call by Value) not the the original refrence of te memory , only get the copy of data,changes occur 
// in the copy

// Dynamically typed language(because a single variable can hold different type of data during rum time)
// ex let x= 1, let x= false , let x= null, let x= undefined

// 7 TYPES : String ,Number ,Big int , Bollean ,null, undefined ,symbolk




const id =Symbol('123')
const anotherId= Symbol('123')
// console.log(id === anotherId);
const bigNumber = 2393989099900099n
// #Reference type(Non primitive)
// Array ,objects ,Functions


// const heros =["skman" , "nagrj" ,"doga"]

// let myObj ={
//     name:"sibun",
//     age: 22
// }

// const myFunction =function(){
//     console.log("ak");
    
// }


//*************************************************
// Stack (primitive,Copy Created), Heap (Non Primitive ,rference of original value)
let myYoutubeName ="sibun.com"
let anotherName= myYoutubeName
console.log(anotherName);
anotherName="chaiaurcode"
console.log(myYoutubeName);
console.log(anotherName);


let userOne ={
    email:"ashis@123" ,
    role:"minister"
}
let userTwo = userOne

userTwo.email ="sibun@987"

console.log(userOne.email);
console.log(userTwo.email);

