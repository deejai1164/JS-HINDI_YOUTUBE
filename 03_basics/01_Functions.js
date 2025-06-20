function sayMyName(){
    console.log("D");
    console.log("E");
    console.log("E");
    console.log("P");
    console.log("A");
    console.log("K");
}
// sayMyName()

// function addTwoNumbers(num1, num2){     //* Jab aap function ka definition banate h to uske andar jo input lete h usko PARAMETERS bola jaata h
//     console.log(num1+num2);
// }

function addTwoNumbers(num1, num2){ 
    // let result = num1 + num2
    // return result
    return num1+num2
}

addTwoNumbers(3, 4)      // 7     // * aur jab function ko call karate h tab uske andar jo input lete h usko bolte h ARGUMENTS
addTwoNumbers(3, "4")    // 34    // as 4 is string JS implements own logic and assume 3 as string as well

// ** IMP ** 
const result = addTwoNumbers(3, 5)  
// console.log("Result: ", result)     // Result:  8

// function loginUserMessage(username){
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("hitesh"))    // hitesh just logged in
// console.log(loginUserMessage())            // undefined just logged in


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("hitesh"))    // hitesh just logged in
console.log(loginUserMessage())            // sam just logged in
console.log(loginUserMessage(""))          // Please enter a username             //  Not a username



// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 500))   // 200


// function calculateCartPrice(...num1){       //      ... => Rest operator
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 500)) // [200, 400, 500]


function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 5000))      // 1st and 2nd arguments goes in val1 and val2 and rest in ...num1


const user = {
    username: "deepak",
    price : 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user)   // username is deepak and price is 199
// OR directly object can be passed by below method

handleObject({                  // username is sam and price is 399
    username: "sam",
    price : 399
})

const myNewArray = [200, 400, 600, 4000]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));