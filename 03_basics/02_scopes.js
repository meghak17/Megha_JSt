var c = 300
let a = 100
 if (true){
    let a = 10
    const b = 20
    var c = 30
    console.log(a);//10cant accessed outside scope

    console.log(b);//cant accessed oustdie scope
 }

 console.log(a);//100
console.log(c);//accessed outside scope but value reamins unchanged

for(let i = 0; i <=10;i++ ){
   console.log(i)
}