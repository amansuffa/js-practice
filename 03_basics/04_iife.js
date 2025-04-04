// Immediately Invoked Function Expressions (IIFE)

// global scope k pollution se problem hota h, is liye IIFE use hota h 
// IIFE is a function that runs as soon as it is defined



(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // invoke to ho jye ga lkn use pta nhi h k context rokna kahan hai is liye semicolon b lgayen ge agr ek se zyada iife hain

( ()=>{
    // anonymous IIFE
    console.log(`DB CONNECTED TWO`);
} )();


// IIFE with parameters
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hamza'); 


