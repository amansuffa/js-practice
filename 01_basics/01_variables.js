const accountId = 144553
let accountEmail = "aman@google.com"
var accountPassword = "12345"
accountCity = "Lahore"  // possible but don't use
let accountState;

// accountId = 2 // not allowed


accountEmail = "meeru@pollo.com"
accountPassword = "21212121"
accountCity = "Faisalabad"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])