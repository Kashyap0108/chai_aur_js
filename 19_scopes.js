let c =300// this is called as the globa scope
if(true)
{//this is called as the block scope
    let a = 10
    const b =20
    var c = 30//never use
}

// console.log(a)
// console.log(b)
console.log(c)