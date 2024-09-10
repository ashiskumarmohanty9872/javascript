const tinderUser = new Object() //Singleton object

const tinderUser1 = {} // Non singleton object

tinderUser.id="abc123"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false

// console.log(tinderUser); 
// console.log(tinderUser1);

const regularUser = {
    email: "sibun.com",
    fullName: {
        userFullName :{
            firstName:"sibun" ,
            lastName:"Mohanty"
        }
    }

}
// console.log(regularUser.fullName.userFullName.lastName);
const obj1 = {1: "a" ,2:"b"}
const obj2 = {3:"a" , 4:"b"}

// const obj3 = {obj1 , obj2}
/*concatination like array add new object inside another object */
// const obj3 =Object.assign(obj1,obj2)
// const obj3 =Object.assign({},obj1,obj2) /*optional parameter ,(target + source ) */ 
// console.log(obj3); /** object inside object */

// <<<<<<<<<<Spread operator>>>>>>>>>>>.

// const obj3 = {...obj1 , ...obj2}
// console.log(obj3);


const users =[{
    id:1 ,
    email:"h@.com"
},{
    id:1 ,
    email:"kk@.com"
},
{
    id:1 ,
    email:"sinu@.com"
}
 ]
 console.log(  users[0].email);

//  console.log(Object.keys(tinderUser));
//  console.log(Object.values(tinderUser));
//  console.log(Object.entries(tinderUser)); //key and value comes separately in aarys

//  console.log(tinderUser.hasOwnProperty('isLogged'));

// *************Deconstructor*************

const course = {
    courseName :"js in Hindi",
    price :"999" ,
    courseInstructor:"Sibun"
}

const {courseInstructor } = course
const {courseInstructor:CI } = course //"" Naming for it in own style"
console.log(courseInstructor);
console.log(CI);


 
 









