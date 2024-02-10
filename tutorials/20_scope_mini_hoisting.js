// DOM => Document Object Manipulation 

function one()
{
    const username = "kashyap"
    function two()
    {
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)
    two()
}
one()

// if(true)
// {
//     const username = "kashyap"
//     if(username==="kashyap")
//     {
//         const website = "youtube"
//         console.log(username+website
//             )
//     }
//     console.log(website)
// }
// console.log(username)

// _____________interestin______________________
console.log(addone(5))
function addone(value)
{
    return value + 1
}
//this type of function generation will not give any errors.

console.log(addtwo(5))
const addtwo = function(num)
// this type of function generation will give an error
{
    return num+2
}