// Immediately Invoked Function Expression(IIFE)

//  function chai(){
//     console.log(`DB CONNECTED`)
//  }
//  chai()
// this is the normal function calling
(function chai(){
    // named iife
    console.log(`DB CONNECTED`)
})();
// the semicolon should be inserted here between the two functions iife

((name)=>{
    console.log(`DB CONNECTED TWO ${name}`)
})('hitesh')