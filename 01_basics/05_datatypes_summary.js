// Note: Js is dynamically typed because we do not need to declare the data type of a variable


// Data memory me kis trah se store hota h aur us data ko ap kis trah se access kr skte ho
// is basis pr 2 types hain 

// ***************************** Primitive *****************************

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null // datatype => Object
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 3456543576654356754n //big int



// ********************** Non-Primitive / refernce ********************

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof myFunction); // datatype => object function

// https://262.ecma-international.org/5.1/#sec-11.4.3


// ############################### Memory In JS ################################
// Stack (Primitive), Heap (Non-Primitive)

let country = "Faisalabad";
let anotherCountry = country;  // make copy
anotherCountry = "Lahore";
console.log(country);
console.log(anotherCountry);


let user = {
    email:"user@gmail.com",
    pw:123
};
let anotherUser = user;  // refer to original data
anotherUser.email = "newuser@gmail.com";
console.log(user.email);
console.log(anotherUser.email);