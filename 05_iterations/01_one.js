//for
for (let i = 0; i < 10; i++) {//double click and ctrl + d
   // const element = i;
   if(i == 5){
   // console.log("5 is best number");
   }
  //  console.log(i);
}

for (let i = 1; i <=10; i++) {
    //console.log(`outer loop value ${i}`);
   for (let j = 0; j <=10; j++) {
    //console.log(`Inner loop value ${j}`);
   // console.log(i+"*"+ j + "=" + i*j);
   }
    
}

let myArray = ["mango","apple","orange","chikoo"]

for (let k = myArray.length; k >=0 ; k--) {
   // console.log(myArray[k])
    
}

//break and contiue
for (let index = 1; index <= 20; index++) {
    if(index == 5){
       // console.log(`5 is favorite`)
        break;
    }
     //console.log(`value of i is ${index}`)
    
}

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`5 is favorite`)
        continue;
    }
     console.log(`value of i is ${index}`)
    
}