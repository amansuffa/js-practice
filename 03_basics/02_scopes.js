let a = 300; // block scope
// const b = 20; // block scope
var c = 300; // global scope

if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
    c = 70; // var k jesa hi kaam kr rha h
    console.log("INNER: ", a);
    
}


console.log(a); 
// console.log(b); 
console.log(c); 


// global scope , browser me alag h or codespace me node k through run krne se alag ho ga

// ########################


// closure in js --> child function can access parent function variables even after parent function has executed
function one(){
    const username = "hamza"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()


if (true) {
    const username = "hamza"
    if (username === "hamza") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);



// ++++++++++++++++++ interesting ++++++++++++++++++

// function hoisting
console.log(addone(5)) // is me error nhi aay ga q k syntax different h

function addone(num){
    return num + 1
}

// declaration se pehle use nhi kr skte

addTwo(5) // is trh se error aay ga
// function expression
const addTwo = function(num){
    return num + 2
}