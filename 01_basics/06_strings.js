const firstName = "hamza";
const repoCount = 50;
 
// console.log(firstName + repoCount + "Value");


const gameName = new String('ameerhamza') // type of "object"


// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('m'))


const newString = gameName.substring(0,4) // minus me value nhi de skty
// console.log(newString)

const anotherString = gameName.slice(-10,6) // minus me value de skty => hain ulta start kre ga
console.log(anotherString)

const newStringOne = "   hamza    "
// console.log(newStringOne)
// console.log(newStringOne.trim())

const url = 'https://hamza.com/ameer%20hamza'

// console.log(url.replace('%20', '-'))

// console.log(url.includes('hamza'))
// console.log(url.includes('meeru'))


const gameNameNew='Muhammad-Ameer-Hamza'
// console.log(gameNameNew.split('-'))