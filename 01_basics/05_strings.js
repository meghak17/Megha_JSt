const name ="megha"
const repoCount = 50

console.log(name+repoCount+"value");
console.log(`hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String("Megha")
console.log(gameName);//[String: 'Megha']
console.log(typeof gameName);//object
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase())
console.log(gameName.length)//5
console.log(gameName.lastIndexOf('e'))//1
console.log(gameName.substring(0,3))//Meg
console.log(gameName.slice(-8,4))//Megh
const gameName1 = "     Megha   "
console.log(gameName1.trim())//Megha
console.log(gameName.replace('e','i'))//Migha
console.log(gameName.split('-'));