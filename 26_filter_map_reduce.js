// // const coding = ['js', 'ruby', 'java', 'pyhton', 'cpp']

// // const values = coding.forEach((item)=>{
// //     console.log(item)
// //     return item
// // })
// // console.log(values)
// // // for each does not return the values 

// const myNums = [1,2,3,4,5,6,7,8,9,10]
// // const newNums = myNums.filter((num)=>{return num>4})
// // filter returns the value and is the oppposite of for each

// // const newNums = []
// // myNums.forEach((num)=>{
// //     if(num > 4)
// //     {
// //         newNums.push(num)
// //     }
// // })
// // console.log(newNums)

// // 
// const 

// const coding = ["js", "ruby", "java", "python", "cpp"]
// const values = coding.forEach((item)=>{
//     console.log(item);
//     return item;
// })
// // for each loop does not return anything
// console.log(values);

// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter((num)=>{
//     return num > 4
// })
// this filter rreduces the values

// const newNums = []
// myNums.forEach((num)=>{
//     if(num>4)
//     {
//         newNums.push(num)
//     }
// })
// console.log(newNums)

// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

//   let userBooks = books.filter((bk)=>bk.genre==="History")
//   userBooks = books.filter((bk)=>bk.publish>=1995 && bk.genre ==="History")
//   console.log(userBooks)

// const myNumbers = [1,2,3,4,5,6,7,8,9,10]
// // const newNums = myNumbers.map((num)=>num+10)
// const newNums = myNumbers.map((num)=> num*10).map((num)=>num+1).filter((num)=>num>=40)
// console.log(newNums)

const myNums = [1,2,3]
// const myTotal = myNums.reduce(function(acc,currVal){
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal
// },0)

const myTotal = myNums.reduce((acc,curr)=> acc + curr,0)
console.log(myTotal)

const shopping_cart =[ {
    itemName : "js course",
    price : 2999,
},
{
    itemName : "data science",
    price : 12999
},
{
    itemName : "python course",
    price : 10000,
},
]

const price_Payment = shopping_cart.reduce((acc,item)=>acc+item.price,0)
console.log(price_Payment)