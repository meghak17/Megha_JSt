let myDate = new Date()
// console.log(myDate);//2024-06-01T17:27:49.987Z
// console.log(myDate.toString());//Sat Jun 01 2024 17:27:49 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());//Sat Jun 01 2024
// console.log(myDate.toISOString());//2024-06-01T17:29:36.860Z
// console.log(myDate.toLocaleDateString());//6/1/2024
// console.log(typeof myDate);//object

let myCreatedDate = new Date(2024,0,13)

//console.log(myCreatedDate);//2024-01-13T00:00:00.000Z
//console.log(myCreatedDate.toDateString());//Sat Jan 13 2024

let date = new Date(2024,0,17,6,30)
//console.log(date.toLocaleString());//1/17/2024, 6:30:00 AM

let date1 = new Date("2023-01-17")//anyhow
//console.log(date1.toLocaleString());//1/17/2023, 12:00:00 AM
//console.log(date1.toLocaleDateString());//1/17/2023

let myTimeStamp = Date.now()

// console.log(myTimeStamp);//1717263727864
// console.log(date1.getTime());//1673913600000
// console.log(Math.floor(Date.now()/1000));//1717263727

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getHours());

newDate.toLocaleString('default',{
    weekday:"long"
})
console.log(newDate);