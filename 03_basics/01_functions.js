//functions are block of code used to execute mannytimes
//by keyword function
function myName(){//function definition
    console.log("Megha");
}
//myName()//execute or call for function

function add(num1,num2){
    
   // console.log(num1+num2);//30
}
//add(10,20)

function add1(num1,num2){
    // let res = num1+num2
    // return res
    return num1+num2
    console.log("Megha");//never get executed
}
const res = add1(10,200)
//console.log("result: ",res);

function msg(username){
    if(username != null){
        return `${username} just logged in`
    }
    else{
        return `invalid user just logged in`
    }
     
}
console.log(msg())//when the parameter is 
//empty the value is undefined
