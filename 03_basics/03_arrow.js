const user ={
    username :"Megha",
    price:999,

    wlc : function(){
      console.log(`${this.username} ,welcome to website`);
      //console.log(this);//{ username: 'Megha', price: 999, wlc: [Function: wlc] }
    }
}
// user.wlc()
// user.username = "sam"
// user.wlc()
//console.log(this);//{}

// function chai(){
//     let username ="Megha"
//     //console.log(this.username);//undefined
// }
//console.log(chai())
//function chai(str){
       // return str
//}
//console.log(chai("Megha"))//Megha

// const chai = function(){
//     let username = "Megha"
//     console.log(this.username);//undefined
// }
// chai()

// const chai = () =>{ //arrow function
//     let username = "Megha"
//     console.log(this.username);//still its undefined in arrow function
// }
// chai()
// const chai = () =>{ //arrow function
//     let username = "Megha"
//     console.log(this);//{}
// }
// chai()

//()=>{} arrow function
// const addTwo = (num1,num2)=>{
//       return num1+num2 ....explicitly
// }

//if currly braces are present then we have to give return keyword
// if paranthesis then we doesnt need to give return

// const addTwo = (num1,num2)=> num1+num2
// console.log(addTwo(5,10)) implicit arrow function

 const addTwo = (num1,num2)=> ({username:"Megha"})//we have to give()
console.log(addTwo(5,10))

