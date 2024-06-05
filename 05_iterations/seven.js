const myNum = [1,2,3,4,5,6,7,8,9,10]
//const newNum = myNum.map((num)=>num+10)
//console.log(newNum);

//chaining=> we can use map().filter().map()
// const newNum = myNum.filter((num)=>{
//     return num % 2 == 0
// })
// console.log(newNum);

const newNum = myNum
.map((num)=> num * 10)
.map((num)=>num +1)
.filter((num)=>num >= 40)

console.log(newNum);//false,true,false