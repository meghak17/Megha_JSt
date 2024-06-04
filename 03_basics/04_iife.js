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