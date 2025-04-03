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