const accountId = 144553
let accountEmail = "deejai6281@gmail.com"
var accountPassword = "12345"
accountCity = "Mirzapur"
let accountState;
// accountId = 2  // not allowed becoz in 1st line accountId is declared as const

accountEmail = "hc@hc.com"
accountPassword = "123121312"
accountCity = "Bengaluru"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


// prefer not to use var because of issue in block scope and functional scope