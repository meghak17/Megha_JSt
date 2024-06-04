const userEmail = "me@jas.com"//if empty then else will executed
if(userEmail){//not compared
    console.log("got user mail");
}else{
    console.log("dont have user email");
}
/*
falsy value
false , 0 , -0 , BigInt 0n, "", null,undefined, NaN

truthy value
true,1,"0","false"," ",[],{},function (){}*/

// if(userEmail.lenth === 0){
//     console.log("array is empty");
// }

const emptyObject = {}
if(Object.keys(emptyObject).length === 0){
    //console.log("object is empty");
}

/*false == 0 => true
false == ''  => true
0 == ''      => true*/

//Nullish Coalescing Operator(??): null undefined

let val1;
val1 = 5 ?? 10//5
val1 = null ?? 10 //10
val1 = null ?? 10 ?? 20 // 10
val1 = undefined ??15//15
console.log(val1);

//ternary operator
//condition ? true : false

const icePrice = 100
icePrice <= 80 ? console.log("less then 80"): console.log("greater than 80");;