// singleton => one of its type (constructor)

// Object.create()  // constructor method 
// object literals 

const mySym = Symbol("key1")
const jsUser = {
    name : "Kashyap",
    "full name" : "Hitesh Choudhary ",
    age : 18,
    [mySym]: "mykey1",
    location: "Jaipur",
    email: "kashyap@gmail.com",
    isLoggedin: false,
    LastloginDays : ["Monday", "Saturday"],
}

// myArray = ["k", "a"]
console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["full name"])
console.log((jsUser[mySym]))


jsUser.email = "hitesh@kashyap.com"
console.log(jsUser.email)
// Object.freeze(jsUser)
jsUser.email = "hehemohanty"
console.log(jsUser)

jsUser.greeting = function()
{
    console.log("Hello JS user")
}
jsUser.greeting2 = function()
{
    console.log(`Hello JS user", ${this.name}`)
}

console.log(jsUser.greeting)