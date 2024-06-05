const myNum = [1,2,3]
// const newNum = myNum.reduce(function(acc,cur){
//     console.log(`acc ${acc} and cuurent ${cur}`);
//     return acc + cur
// },0)

// const newNum = myNum.reduce((acc,cur)=>acc+cur,0)
// console.log(newNum);

const shopping = [
    {
        item:'js course',price:2999
    },
    {
        item:'java course',price:3999
    },
    {
        item:'cpp course',price:3500
    },
    {
        item:'python course',price:4500
    },
]
const shop = shopping.reduce((acc,item)=>acc + item.price,0)
console.log(shop);