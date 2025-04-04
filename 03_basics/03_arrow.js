const user = {
  username: "hitesh",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);   // node me this refers krta h empty object lo q k abi global me koi context nhi hai
//  browser me global object, window object h to this use refer krta h

function chai(){
    console.log(this);
}

// chai()

function chai2(){
    let username = "hamza"
    console.log(this.username); // is trh se srf object me hi chale ga
}

// chai2()

const chai3 = function () {
    let username = "hamza"
    console.log(this.username);
}

// chai3()


const chai4 = () => {
    let username = "hamza"
    console.log(this.username);
    console.log(this);
}

// chai4()


// explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3, 4))


// implicit return
const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) => ( num1 + num2 ) // curly braces me likhne se return krna hi pre ga lkn paranthesis me nahi likhna pre ga
console.log(addTwo(3, 4))


const anotherAddTwo = (num1, num2) => ({username: "hamza", num1: num1, num2: num2})
console.log(anotherAddTwo(3, 4))




const myArray = [2, 5, 3, 7, 8]


// different synatax
// myArray.forEach(function() {})
// myArray.forEach(()=> {})
// myArray.forEach(()=> ())
