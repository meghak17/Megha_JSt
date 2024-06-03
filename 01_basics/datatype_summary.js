//primitive-7
//String,Number,Boolean,null,undefined,Symbol,BigInt

const score = 100
const id = Symbol('123')
const anotherId = Symbol('123')
const outsideTemp = null;

console.log(id === anotherId);
//js is dynamic language
//refrence (non primitive)
//array,objects,functions

const heroes =["sharukh","salman","tiger"];
let myObj={
    name:"megha",
    age:22,

}
console.log(typeof myObj);
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);
/////////////////////////////////////////////////////
//stack (primitive) ,heap(non primitive)
let myYotube ="hiteshdotcom"

let anothername=myYotube
anothername = "chairaurcode"

console.log(myYotube);
console.log(anothername);

let userOne={
    email:"user@google.com",
    upi:"user@ybl"

}

let userTwo = userOne
userTwo.email = "hitesh@google.com"

console.log(userTwo);