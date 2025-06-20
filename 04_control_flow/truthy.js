const userEmail = []  // truthy value 

if(userEmail){
    console.log("got user email")
}else{
    console.log("Don't have user email");
}

// output
// got user email


// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// other than falsy values all are truthy values
// some are surprising such as

// "0", 'false', " ", [], {}, function(){}

//**IMP if something is added inside a string it is truthy value and empty strings are falsy values


// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10    // 5
// val1 = null ?? 10    // 10
val1 = null ?? 10 ?? 20  // 10

console.log(val1);


// ternary operator

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")   // more thana 80