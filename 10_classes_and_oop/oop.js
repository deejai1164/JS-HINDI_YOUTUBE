// Object Literal
const user = {
    username: "deepak",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${username}`);    // Error: username is not defined
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username); // deepak
// console.log(user.getUserDetails());
// output
// {
//   username: 'deepak',
//   loginCount: 8,
//   signedIn: true,
//   getUserDetails: [Function: getUserDetails]        
// }
// console.log(this);   // {}

// to escape from building multiple users we will use CONSTRUCTOR now
// new = constructor function
// ek hi object literal se multiple instance bana sakte ho

// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username;   // LHS = variable  and   RHS = jo pass karke de rhe h 
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }
    return this
}

// const userOne = User("sanskar", 15, true)
// const userTwo = User("Aman", 56, false)

// console.log(userOne);
// if I will not print userTwo the output will be OVERRIDED over userOne
// and hence to stop overriding use keyword "new"

const userOne = new User("sanskar", 15, true)
const userTwo = new User("Aman", 56, false)
console.log(userOne);  // User { username: 'sanskar', loginCount: 15, isLoggedIn: true }
console.log(userTwo);  // User { username: 'Aman', loginCount: 56, isLoggedIn: false }


// using NEW keyword - sabse pahle ek empty object create hota h jisko instance bola jaata h
// constructor function call hota h and jo arguments hota h usme pack karta h and de deta h

// 3 steps - 1. object create hoga, 2. values pass on, 3. this ke andar add ho jaayenge 