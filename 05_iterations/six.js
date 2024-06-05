const coding = ["js","ruby","python","c++","java"]
//for each we cant give conditions
const values = coding.forEach((item)=>{
   // console.log(item);
})
//console.log(values);

//filter => we can give conditons
const nums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = nums.filter((num)=> num >4)
// console.log(newNums);[ 5, 6, 7, 8, 9, 10 ]

// const newNum = nums.filter((num)=>{
//     return num > 4//main return
// })
//console.log(newNum);//[ 5, 6, 7, 8, 9, 10 ]
// const newNum = []
// nums.forEach((num)=>{
//     if(num>4){
//         newNum.push(num)
//     }
// })
// console.log(newNum);//using for each

//filter example
const books =[
    {title: 'Book one' , genre:'Fiction' , publish: 1981
        ,edition: 2004
    },
    {title: 'Book two' , genre:'Non-Fiction' , publish: 1982
        ,edition: 2008
    },
    {title: 'Book three' , genre:'Fiction' , publish: 2001
        ,edition: 2007
    },
    {title: 'Book four' , genre:'History' , publish: 1989
        ,edition: 2010
    },
    {title: 'Book five' , genre:'Fiction' , publish: 2009
        ,edition: 2014
    },
    {title: 'Book six' , genre:'Science' , publish: 1987
        ,edition: 2012
    },
]

//const newBook = books.filter((bk)=>bk.genre === "Fiction")
const newBook = books.filter((bk)=>{
    return bk.publish>=2000 && bk.genre ==='Fiction'
})
console.log(newBook);