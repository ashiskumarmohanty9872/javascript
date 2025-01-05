// for of

// ["",""]
// [{},{},{}]

// const arr=[1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);
// }

const greeting ="hello Sibun"
for (const greet of greeting) {
    if(greet == " "){
        continue; // print charecter without space
    }
 console.log(greet)
}

// Map data type

const map = new Map()
map.set('IN',"India")
map.set('IN',"India")
map.set('Fr', "France")

// for (const key of map) {
//     console.log(key); //print completely arr
// }

// for (const [key,value] of map) {
//     console.log(key,'=>',value); //array destruture,print key and value like separately
// }
// console.log(map);

// const myObj ={
//     'game1':"nfs",
//     'game2':"spiderman"
// }
// for (const key of myObj) {
//     console.log(key); // object is not itrable
// }

