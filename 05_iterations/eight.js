// const myNums=[1,2,3]
// const myTotal =myNums.reduce((acc,curval) =>{
// console.log(`acc:${acc} curval:${curval}`);
// return acc+curval
// },0)
// console.log(myTotal);

const shoopingCart =[
    {
        itemName:"js course",
        price:2899
    },
    {
        itemName:"java course",
        price:1999
    },
    {
        itemName:"mobilee dev course",
        price:2899
    }
]

const total=shoopingCart.reduce((acc,item)=>(acc + item.price),0)
console.log(total);


// *************practice example One**************

// let myNums =[10,20,30,40]
// let totals=myNums.reduce((acc,curval)=>{
//     console.log(`acc:${acc} curr value:${curval}`);
    
//     return acc+curval
// },0)
// console.log(totals);

let books=[
    {bookName:"history",
     price:120   
    },
    {bookName:"Math",
     price:200   
    },
    {bookName:"IOT",
     price:120   
    },
]
let totals= books.reduce((acc,item)=>( acc + item.price),0)
console.log(totals);




