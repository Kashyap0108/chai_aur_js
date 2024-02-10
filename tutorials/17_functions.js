function sayMyName(){
    console.log("K")
    console.log("A")
    console.log("S")
    console.log("H")
    console.log("Y")
    console.log("A")
    console.log("P")
}

// sayMyName()

// function addNumbers(num1, num2)
// {
//     console.log(num1 + num2)
// }
function addNumbers(num1, num2)
{
    // let result = num1+num2
    // return result
    return num1+num2
}
// addNumbers(3,undefined)

const result = addNumbers(3,5)
// console.log("Result:",result)

function userLoginMessage(username = "sam")
{
    if(!username)
    {
        console.log("Please enter your username")
        return
    }
    return `${username} just logged in `
}
console.log(userLoginMessage("kashyap"))