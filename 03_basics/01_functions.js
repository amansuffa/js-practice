
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
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage2())
