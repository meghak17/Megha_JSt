/*const balance = new Number(100)
console.log(balance);//[Number: 100]
console.log(typeof balance.toString());//100=>String
console.log(typeof balance);//object
console.log(balance.toFixed(2));//100.00

const otherNumber = 23.3966
console.log(otherNumber.toPrecision(3));//23.9
//23.8966=>23.9
//23.3966=>23.4
//123.8966=>124

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));//1,00,00,00
*/
// *********************MATH*********************
// console.log(Math);
// console.log(Math.abs(4));//4=>4 -4=>4
// console.log(Math.round(4.5))//4.3=>4 4.6=>5
// console.log(Math.ceil(4.2));//5
// console.log(Math.floor(4.9));//4
// console.log(Math.max(2,3,4,5,6));//6
// console.log(Math.min(2,3,4,5,6));//2

console.log(Math.floor(Math.random()*10)+1);
const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1) )+min)