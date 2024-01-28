// // if statement
// const isUserLoggedIn = true
// const temperature =41
// if(temperature == 41){
//     console.log("less than 50")
// }
// else{
//     console.log("greater than 50")
// }

// const balance = 1000
// if(balance>500) console.log("test"),
// console.log("test2");
// // do not write like this 


// const userLoggedIn = true
// const debitCard = true
// if(userLoggedIn&&debitCard){
//     console.log("Allow to buy the course")
// }

// const month = "jan" 
// switch (month) {
//     case "jan":
//         console.log("January")
//         break;
//     case "feb":
//         console.log("Feb")
//         break;
//     case 3:
//         console.log("March")
//         break;

//     default:
//         break;
// }

const userName = "jitesh@gmail.com"
if(userName){
    console.log("got the email");
}
else {
    console.log("Dont have user email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy value
// "0", 'false', " ", [], {}, function(){}

// const emptyObj = {}
// if(Object.keys(emptyObj).length===0){
//     console.log("Object is empty")
// }

// Nullish Coalescinf Operator (??): null undefined

// let val1; 
// // val1 = 5 ?? 10
// // val1 = null ?? 10
// // val1 = undefined ?? 15
// val1 = null ?? undefined ?? 10
// console.log(val1)

// nullish coaslescing operator and ternary operator are different

// TERNIARY OPERATOR 
// condition ? true : false
const iceTeaPrice= 100
iceTeaPrice <=80 ? console.log("less than 80"):console.log("more than 80");