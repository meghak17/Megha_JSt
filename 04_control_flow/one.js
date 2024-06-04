/*if
if(condition){

 }
 < , > , <= , >= ,
  = ...assignment,
  == ....comparison,
  === ....data type strictly equality...two operands are equal
  !=,
  !==*/
  if(2 == "2"){
    //console.log("Executed");//executed
  }
  if(2 === "2"){
   // console.log("Executed");//nothing
  }
  else{
   // console.log("not executed");
  }

  const balance =1000
 // if(balance > 500) console.log("test"),
  //console.log("test2");//we can write within
  // same line or dif line using, not good practice
//   if(balance < 500){
//       console.log("less than 500");
//   }
//   else if(balance<750){
//     console.log("less than 750");
//   }
//   else if(balance<1000){
//     console.log("less than 1000");
//   }
//   else{
//     console.log("greater than 1000");
//   }

const userLoggedIn = true
const debitcard = false
// if(userLoggedIn && debitcard){
//     console.log("allow to buy course");allow to buy course => both are true
// }

if(userLoggedIn || debitcard){
    console.log("allow to buy course");//=>anyone is true
}