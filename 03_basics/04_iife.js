//Immediately Invoked Function Expressions(IIFE)
// function chai(){
//     console.log(`DB Connected`);
// }
// chai()...DB Connected

(function chai(){//named iife
    console.log(`DB Connected`);
})();//..,execution call
//sometimes global scope variables are polluted to handle that we have to use iife
//when we use two or more iife then we have to use ; to first

((name)=>{
    console.log(`DB connected two ${name}`);
})('Megha')

/////basics/////
let val1 = 10
let val2 = 5
function addNum(num1,num2){
    
    let total = num1+num2
    return total
}
let result1 = addNum(val1,val2)
let result2 = addNum(10,2)
console.log(result2)
/*1.global execution==this
2. memory phase       =>addNum
val1 ->undefined  
val2 -> undefined
addNum -> definition
result1 ->undefined
result2 ->undefined
3.execution phase      =>addNum
val1 <- 10
val2 <- 5
addNum -> new variable env + execution thread->
delete after execution
*memory phase
val1 ->undefined  
val2 -> undefined
total ->undefined
*execution context
num1->10
num2->5
total->15   =>global execution

call stack 
three
two
one
*/

