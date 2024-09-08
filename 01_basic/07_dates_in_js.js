// Dates 
let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);


let myCreatedDate = new Date(2024 ,0 ,23)
// console.log(myCreatedDate.toDateString());

let myAntotherDate = new Date(2024 ,0 ,23,5,3)
// console.log(myAntotherDate.toLocaleString());

// let date_1 =new Date("2024-09-08")
let date_1 =new Date("03-09-2024")
// console.log(date_1);


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(date_1.getTime());

// console.log(Math.round(Date.now() / 1000));
 
let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());

// String Interpolation:- ` my name sibun ${ myName}`

newDate.toLocaleString('default' ,{
    weekday:"long"
})
console.log(newDate);
