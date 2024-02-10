// // for of loop 
// const arr = [1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);
// }

// const greetings = ["Hello world!"]
// for(const greet of greetings)
// {
//     console.log(`Each char is ${greet}`)
// }

// // Maps

// const map = new Map()
// map.set('IN', "India ")
// map.set('US', "United states of America ")
// map.set('FR', "France")
// map.set('FR', "France")
// // console.log(map)

// for(const [key,value] of map)
// {
//     console.log(key,' :-',value)
// }

// const myObject = {
//     'game_1' : "NFS",
//     'game_2' : "Spiderman",
// }

// for(const [key,value] of myObject)
// {
//     console.log(key, ":-", value)
// }
// // object cannot be iterable in the following manner
// // there are other ways to iterate the object


// const myObject = {
//     js : 'javascript',
//     CPP : 'c++',
//     rb : 'C++',
//     swift : 'swift by apple',
// }

// for (const key in myObject) {
//     // console.log(myObject[key])
//     console.log(`${key} shortcut id for ${myObject[key]}`)
// }

// const programming = ["js", "rb", "py", "java", "cpp"]
// for(const key in programming)
// {
//     console.log(programming[key]);
// }

const coding = ["js", "ruby","java", "python", "cpp"]
// coding.forEach( function (item) {
//     console.log(item)
// } )
// callback function do not have a name

// coding.forEach((item)=>{
//     console.log(item)
// })

// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)


// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr)
// })

const myCoding = {
    languageName : "Javascript",
    languageFileName : "js"
}

myCoding.forEach((item)=>{
    console.log(item.languageName)
})