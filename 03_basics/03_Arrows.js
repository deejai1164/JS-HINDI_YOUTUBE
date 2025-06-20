const user = {
    username: "deepak",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this)
    }
}

// user.welcomeMessage()   // deepak, welcome to website

// user.username = "sam"
// user.welcomeMessage()   // sam, welcome to website

// console.log(this);        // {}

// function chai(){
//     let username = "deepak"
//     console.log(this);
// }
// chai()


// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username)
// }
// chai()     // undefined

// ARROW FUNCTIONS

const chai = () => {     // Inherits this from the parent scope    // Doesn't have arguments object
    let username = "hitesh"
    console.log(this)
}

// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// * curley bracket me parameters likha to return likhana hoga & paranthesis me likha to return type nhi likhana hoga

// const addTwo = (num1, num2) => (num1 + num2)  // implicit type return i.e, return nhi use karna pada

const addTwo = (num1, num2) => ({username: "deepak"}) // { username: 'deepak' }  // to return OBJECT you have to wrap it into curley braces

console.log(addTwo(3, 4))

// const myArray = [2, 6, 7, 8, 5]