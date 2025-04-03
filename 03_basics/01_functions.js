
function sayMyName(){
    console.log("H");
    console.log("A");
    console.log("M");
    console.log("Z");
    console.log("A");
 
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }


addTwoNumbers(3, 5)

// const result = addTwoNumbers(3, 5) 
// console.log("Result: ", result); // undefined

// number1 and number2 are parameters
function addTwoNumbers(number1, number2){

    let result = number1 + number2
    return result
    // return number1 + number2
    // console.log("Hamza")
}

// 3 and 5 are arguments
const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);



function loginUserMessage(username){
    // if(username === undefined){
    //     console.log("PLease enter a username");
    //     return
    // }

    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}


// loginUserMessage("hitesh") // execute ho jye ga aur value return b ho jye gi lkn hm ne print ka to nhi bola na

// console.log(loginUserMessage("hamza"))
// console.log(loginUserMessage())




// Default value
function loginUserMessage2(username = "sam"){

    return `${username} just logged in`
}

// console.log(loginUserMessage2())



// Rest Operator --> ...num1 --> for passing multiple values
function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

function calculateCartPrice2(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice2(200, 400, 500, 2000))



const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username: "sam",
    price: 399
})



const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]))