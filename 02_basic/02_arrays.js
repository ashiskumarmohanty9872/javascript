const marvel_heros =["ironMAn" , "SpiderMAn" ,"Thor"]
const b_heros =["salamn" ,"sharukh"]
marvel_heros.push(b_heros)
// console.log(marvel_heros);


// Concat

const allHeros=marvel_heros.concat(b_heros)
// console.log(allHeros);

// spred operator

// const all_my_newHeros = [...marvel_heros , ...b_heros]
// console.log(all_my_newHeros);

const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array =another_array.flat(Infinity)
// console.log(real_another_array);

/*Interesting  */

// console.log(Array.isArray("Sibun"));
console.log(Array.from("Sibun"));
 console.log(Array.from({Name :"Sibun"})); //  intersting***

let score1= 100
let score2=200
let score3 = 300
// console.log(Array.of(score1,score2,score3));





