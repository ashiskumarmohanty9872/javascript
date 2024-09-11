
var c = 300 
let b=55 // Global scope
if(true){
    let a=10 
    const b=20 //Block scope
    var c=30
    // console.log("INNER :", a);
    
}
// console.log(a); //CE
// console.log(b);// CE
// console.log(c);
// console.log(b);


// console.log(a);
// var a = 10;//undefined

/*var: Function-scoped, can be redeclared and reassigned, hoisted.
let: Block-scoped, can be reassigned, temporal dead zone.
const: Block-scoped, cannot be reassigned, temporal dead zone. */

/*VAR VS LET 
Var can be declared and accessed globally. Let can be declared globally,
 but its access is limited to the block in which it is declared. Variables 
 declared using var can be re-declared and updated within the same scope. 
 Variables declared with let can be updated but not re-declared within the same scope. */


 /*VAR VS CONST
 var is function-scoped and has been around since the early days of JavaScript.
 const is blocked scoped,cant redeclare and reassign */


 function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
        }
        // console.log(website);
        // two()
        
 }
 one()

 if (true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = "youtube"
        console.log(username + website);
        
    }
    // console.log(website)
 }
//  console.log(username )

// ***************** Intersting ******************
console.log(addone(5));

function addone(num){
    return num +1 
}

addtwo()
const addtwo= function (num){
    return num +2 
}
