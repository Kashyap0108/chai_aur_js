// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id="123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)
const regUser = {
    email : "someone@gmal.com",
    fullname : {
        userFullName : {
           firstName : "Kashyap",
           lastName : "Mohanty"     
        }
    }
}
// console.log(regUser.fullname.userFullName.firstName)

const obj1 = {
    1:"a",
    2:"b",
}

const obj2 = {
    3:"a",
    4:"b",
}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2,}
// this is the most used syntax
// console.log(obj3)

constusers = {
    id:1,
    email: "Kashyap@gmail.com",
}
console.log(tinderUser)

console.log(Object.keys(tinderUser))//this returns an array
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))