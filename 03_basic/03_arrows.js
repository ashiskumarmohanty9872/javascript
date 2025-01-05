// const user ={
//     username:"sibun",
//     price:999,
//     welcomeMessage: function(){
//         console.log(`${this.username} ,welcome to website`); //this refers to current context
//         console.log(this);
        
//         }
// }
// user.welcomeMessage()
// user.userName="sam"
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     let username ="sibun"
//     // console.log(this.username);//undefined
    
// }
// chai()


// const chai =function(){
//     let username ="sibun"
//    console.log(this.username);//undefined
// }
// chai()


/*Syntax of arrow function */

// const addTwo =(num1,num2)=>{ //if u use curly braces then must write return keyword*
//     return num1+num2
// }
// console.log(addTwo(3,4));


/*Implicit return */

// // const addTwo =(num1,num2)=>  num1+num2
// const addTwo =(num1,num2)=>  (num1+num2) /*if u use curly braces then 
// must write return keyword ,if not then no parenthesis */
// console.log(addTwo(3,4));

/* Return object*/

const addTwo=(num1,num2)=>({username:"sibun"})
console.log(addTwo(6,7));

const myArray =[1,2,3,4,5]
