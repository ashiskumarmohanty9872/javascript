/* for each does not return any value ,it print undefined*/
// const coding= ["js","php","java","python"]
// const value =coding.forEach((item)=>{
//             console.log(item+10);
//             return item
// })
// console.log(value);//undefined


/* filter */

// const myNUms=[1,2,3,4,5,6,7,8,9,10]
// const newNums=myNUms.filter((num)=> num>4)
// const newNums=myNUms.filter((num)=> { return num>4}) //using scope must write return key word
// console.log(newNums);

/* usingFor Each  */


// const myNUms=[1,2,3,4,5,6,7,8,9,10]
// const newNums = []
// myNUms.forEach((num)=>{
//    if(num>4) //console.log(num);
//    {
//     newNums.push(num)
//    }
// })
// console.log(newNums);

const books =[
    {title:'book one ',genre:'fiction',publish:1981,edition:2004},
    {title:'book two ',genre:'non-fiction',publish:1991,edition:2008},
    {title:'book three ',genre:'History',publish:1981,edition:20010},
    {title:'book four ',genre:'non-fiction',publish:1989,edition:2007},
    {title:'book five ',genre:'science',publish:1981,edition:2004},
    {title:'book six ',genre:'fiction',publish:1981,edition:2009},
    {title:'book seven ',genre:'History',publish:1986,edition:1994}
    ]

  let userBooks = books.filter((bk)=> bk.genre=="History")
 userBooks = books.filter((bk)=>{return bk.edition >2000})
 
 console.log(userBooks);
 






