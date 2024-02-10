// dates

let myDate = new Date()
console.log(myDate.toISOString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString())


let myCreatedDate = new Date("2023-01-14")
console.log(myCreatedDate.toLocaleString())

let timestamp = Date.now()
console.log(timestamp);
console.log(timestamp.getTime())
console.log(Date.now());



    