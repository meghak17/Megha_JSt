var c = 300
let a = 100
 if (true){
    let a = 10
    const b = 20
    var c = 30
   // console.log(a);//10cant accessed outside scope

   // console.log(b);//cant accessed oustdie scope
 }

 //console.log(a);//100
//console.log(c);//accessed outside scope but value reamins unchanged

for(let i = 0; i <=10;i++ ){
   //console.log(i)
}

function one(){
   const username = "Megha"

   function two(){
      const website = "youtube"
     // console.log(username);
      //console.log(website);//not accessible to outside the scope
   }
   
   two()
}
one()

if(true){
   const username = "Megha"
   if(username === "Megha"){
      const website = " youtube"
      //console.log(username + website);

   }
}

//*****************interesting****************//
//console.log(addOne(5))...executes succesfully
//function is declared
function addOne(num){
   return num+1

}
addOne(5)
//console.log(addTwo(5)) error
/*method of function definition*/
//not only declared but holds the value of another function
const addTwo = function(num){
   return num+2
}
console.log(addTwo(5))