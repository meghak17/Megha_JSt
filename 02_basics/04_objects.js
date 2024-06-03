//singleton
//const tinderuser= new Object()
const tinderuser ={}
tinderuser.id ="123abc"
tinderuser.name="Megha"
tinderuser.isLoggedIn = true
//console.log(tinderuser);//{ id: '123abc', name: 'Megha', isLoggedIn: true }
//console.log(Object.keys(tinderuser));//to acces only keys
const regularuser = {
    email:"some@gmail.com",
    fullname :{
        userfullname:{
            firstname:"megha",
            lastname:"kavathekar"
        }
    }
}
//console.log(regularuser.fullname.userfullname.firstname);

const one = {1 : "a" , 2 : "b"}
const two = {3 : "a" , 4 : "b"}
//const three = Object.assign({},one,two)

//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
const three = {...one,...two}
//console.log(three);
//array of objects

const users = [
    {
        id:1,
        email:"megha@k.com"
    },
    {
        id:2,
        email:"meghaa@k.com"
    },

]
// console.log(Object.values(users))
// console.log(Object.entries(users))
// console.log(tinderuser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename:"js,in hindi",
    price:"999",
    courseInstructor:"hitesh"
}
//course.coursename
//const {courseInstructor}= course
//console.log(courseInstructor);=====distructure
const {courseInstructor:instructor}= course
console.log(instructor);