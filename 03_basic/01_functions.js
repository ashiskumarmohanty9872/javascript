function sayMyName() {
    console.log("s"); 
    console.log("i");
    console.log("b");
    console.log("u");
    console.log("n");
    
}
// sayMyName --> function refrence 
// sayMyName() --> function Call


// function addTwoNumbers(num1 ,num2) /*<-Parameter*/{
//     console.log(num1 + num2);
// }

// const result = addTwoNumbers(3,5)
// console.log("Result: ",result)   //undefined

// addTwoNumbers(3,4)//(<--Arguments) // 7
// addTwoNumbers(3,"4")  // 34
// addTwoNumbers(6,true) // 7 
// addTwoNumbers(6,null) // 6 

function addTwoNumbers(num1 ,num2) {
    // let result = num1 + num2 
    // return result
    // console.log("sibun"); //this line will never print ,return ke baad koi print nahi
    
    return num1+num2    
  }
const result = addTwoNumbers(3,5)
// console.log("Result: ",result)

// function loginUserMsg (username){
//     // if(username === undefined){
//     //     console.log("plz enter a username");
//     //     return 
//     // }
//     if(!username ){
//         console.log("plz enter a username");
//         return 
//     }
//     return`${username} jst logged in`

// }
// console.log(loginUserMsg("sibun"))
// console.log(loginUserMsg(""))

function loginUserMsg (username="sibun"){
  if(!username){
    console.log("plz enter a username");
        return 
  }
  return `${username} just logged in`
}
console.log(loginUserMsg("asis kmar Mohanty"))


 