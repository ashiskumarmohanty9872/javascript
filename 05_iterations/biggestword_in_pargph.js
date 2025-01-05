let myString="ashis kuuuumar Mhanty"
let myArray=myString.split(" ")
let bigWord=""

// for (let index = 0; index < myArray.length; index++) {
   
//     if(myArray[index].length > bigWord.length){
//         bigWord = myArray[index]
        
//     }
    
// }
// console.log(bigWord);

const largeNo=myArray.reduce((acc,curval)=>{
 return  acc.length > curval.length ? acc : curval
},0)

console.log(largeNo);










