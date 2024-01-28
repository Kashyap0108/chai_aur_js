const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        // console.log(this)
    }
}

// this function is used to refer to the current context

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let username = "kashyap"
//     console.log(this)
// }
// chai()

// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username)
// }
// const chai = ()=>{
//     let username = "hitesh"
//     console.log(this)
// }//arrow function
// chai()

// const addTwo = (num1,num2)=>{
//     return num1 + num2
// }
// whenever we use the curly braces we have to write return statement

// but whenever we do not use curly braces we have to write the function in the following way 
const addTwo = (num1, num2)=> (num1+num2) // this is called as implicit return
// this is extensively used in REACT
// const addTwo = (num1, num2)=> (num1+num2) 

console.log(addTwo(3,5))