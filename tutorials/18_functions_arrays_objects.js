// shopping cart

function calculateCartPrice(val1,val2,...num1)
{
    return num1
}
console.log(calculateCartPrice(3,4000,234))

// ... => this is called as the rest operator as well as the spread operator depending upon the usage

const user =
{
    username : "kashyap",
    prices : 199,
}

function handleObject(anyObject)
{
    console.log(`Username is ${anyObject.username} and the price is ${anyObject.price}`)
}

// handleObject(user)

const newArray = [200,300,400]

function returnSecondValue(getArray)
{
    return getArray[1]
}
console.log(returnSecondValue(newArray))