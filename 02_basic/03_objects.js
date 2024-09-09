//  Singleton

/**  Constructor type : Object.create */

// Object Literals
const mysybl =Symbol("key1") // Interesting*************
 
const user ={
    Name : "Sibun" ,
    "full Name" :"Ashis kumar Mohanty",
   [mysybl]:"Mykey", //interetying
    Age : 24 ,
    Location:"Bangalore",
    email : "sibun@gmail.com" ,
    isloggedIn : false ,
    lastLoggedIn : ["Monday" ,"Saturday"]

}
// console.log(user.Name); // takes key value as String
// console.log(user["Name"]) // dont take as string so put "" .
// console.log(user["full Name"]);
// console.log( user.mysybl);
// console.log(typeof user.mysybl); // 1>  here symbol is string
// console.log( user[mysybl]);
// console.log(typeof user[mysybl]); /* 2>here symbol is symbol by putting squre bracket in key value */ 


// user.email= "asj"
// console.log(user);

// freeze

// Object.freeze(user)
// user.email= "asj"
// console.log(user);

user.greeting=function(){
    console.log("Hello js user");
    
}
user.greetingtwo=function(){
    console.log(`Hello js user , ${this.Name}`);
    
}
console.log(user.greeting());
console.log(user.greetingtwo());






