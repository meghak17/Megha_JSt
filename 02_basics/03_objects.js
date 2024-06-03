//object literals
const mySym = Symbol("key1")
const user = {
    name:"Megha",
    [mySym]:"myKey2",
    age:22,
    location:"Sangli",
    email:"megha@k.com"
}

user.email = "megha@01.com"//override
//Object.freeze(user)//lock
user.age = 32
// console.log(user.age);
// console.log(user["email"]);
// console.log(typeof user[mySym]);

user.greeting = function(){
    console.log("Hello js user");
}


user.greetingtwo = function(){
    console.log(`Hello js user,${this.name}`);
}
console.log(user.greeting());
console.log(user.greetingtwo());