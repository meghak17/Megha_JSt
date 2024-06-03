const accountId = 144553
let acocuntEmail = "megha@google.com"
var accountPass = "12345"
accountCity = "Sangli"

// accountId = 2 we cant update values // not allowed
acocuntEmail = "mk@ac.com" //we can update the values 
accountPass = "234" //we can update the values
accountCity ="Ashta" //we can update the values ,not the good method

/*
prefer not to use var 
becuase of issue in block scope and functional scope
*/
let accountState;
console.table([accountId,accountPass,acocuntEmail,accountCity,accountState])