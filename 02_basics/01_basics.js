const myArr = [0,1,2,3,4,5]

//console.log(myArr[0]);
const myArr2 = new Array(1,2,3,4,5)
/*myArr2.push(6)
myArr2.pop()
myArr2.unshift(9)
myArr2.shift()*/
//console.log(myArr2);
// console.log(myArr2.includes(9));
// console.log(myArr2.indexOf(3));
// console.log(myArr2);
// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);

console.log("A",myArr);//A [ 0, 1, 2, 3, 4, 5 ]
const myn1 = myArr.slice(1,3)
console.log(myn1);//[ 1, 2 ]
console.log("B",myArr);//B [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1,3)
console.log("C",myArr);//C [ 0, 4, 5 ]
console.log(myn2);//[ 1, 2, 3 ]
//slice gives the value between range 
//splice adds the ranging value but prints original 
//value neglecting the range