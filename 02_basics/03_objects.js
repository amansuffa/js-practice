// singleton --> Object.create


// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Hamza",
    "full name": "Ameer Hamza",
    mySym: "value0",
    [mySym]: "value1",
    age: 7,
    location: "Faisalabad",
    email: "hamza@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"],
    greeting: function(){
        console.log("Hello JS User");
    }
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"]) // bcz it is in string so can't access by dot

// console.log(JsUser.mySym)
// console.log(JsUser[mySym])

// console.log(JsUser);

JsUser.email = "hamzanew@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "hamzanew2@gmail.com"

// console.log(JsUser);


// JsUser.greeting = function(){
//     console.log("Hello JS User");
    
// }
JsUser.greetingTwo = function(){
    // console.log(`Hello JS User, ${JsUser.name}`);
    console.log(`Hello JS User, ${this.name}`);
    
}

// console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



