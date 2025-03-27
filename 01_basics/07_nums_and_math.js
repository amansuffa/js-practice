const score = 400;
// console.log(score);


const balance = new Number(100)
// console.log(balance)

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.89;
// console.log(otherNumber.toPrecision(4)) // start wali values se hi start krta h, na k decimal se
const otherNumber2 = 1123.89;
// console.log(otherNumber2.toPrecision(3))


const otherNumber3 = 10000000;
// console.log(otherNumber3.toLocaleString('en-IN')) // by default International number system me krta h


// ###################################### Maths #########################################################


// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6)); 
// console.log(Math.ceil(4.2)); 
// console.log(Math.floor(4.9)); 
// console.log(Math.min(4, 3, 5, 8)); 
// console.log(Math.max(4, 3, 5, 8)); 


console.log(Math.random()); // 0 tp 1
console.log(Math.random()*10);  // 0 to 9
console.log((Math.random()*10) + 1);  // to avoid 0
console.log(Math.floor((Math.random()*10) + 1));  // value without point


const min = 10;
const max = 20;

console.log(Math.floor((Math.random()*(max-min + 1)) + min));


