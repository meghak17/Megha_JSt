const coding = ["js","cpp","c","java","python"]
// coding.forEach( function (val){
//        console.log(val);
// } )

// coding.forEach((val)=>{
//     // console.log(val);
// })

// function print(val){
//     console.log(val);
// }
// coding.forEach(print)

coding.forEach((item,index,arr)=>{
   //console.log(item,index,arr);
})

const myCoding =[
    {
        langName:"java",
        langFileName:"java",
    },
    {
        langName:"python",
        langFileName:"python",
    },
    {
        langName:"js",
        langFileName:"js",
    },
]
myCoding.forEach((item)=>{
    console.log(item.langName);
})