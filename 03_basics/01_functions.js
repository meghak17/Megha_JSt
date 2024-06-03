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
//console.log(msg())//when the parameter is 
//empty the value is undefined

//...rest operator or spread operator used to take multiple values
function calCartPrice(val1,val2,...num1){
    return num1
}
console.log(calCartPrice(200,400,500,700,100,900))//array
//console.log(calCartPrice());

//objects in functions

const user = {
    usern :  "Megha",
    price : 299
}

function handle(any){
     console.log(`username is ${any.usern} and price is ${any.price}`);

}
//handle(user)//we can send objects that key and value 
handle({
    usern:"Meghaaa",
    price:499
})

//array in function

const myArray = [10,20,30,40]

function myFun(getArr){
    return getArr
}

console.log(myFun(myArray));//[ 10, 20, 30, 40 ]
console.log(myFun([500,600,700,800]));
