// singleton  // Jab actually me literals ki tarah declare karte h to sinleton nhi banata h
// constructor se banega to singleton banega

// Object.create // constructor study later

// OBJECT LITERALS

// ** INTERVIEW => take a symbol add it to the keys of object and show it by printing

const mySym = Symbol("key1")

const jsUser = {
    name: "Hitesh",
    age: 22,
    // mySym: "myKey1", // not using it as symbol  // datatype is string
    [mySym]: "myKey1",   // it is correct now to use it as symbol
    location: "Jaipur",
    email: "dj628164@gmail.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday", "Saturday"],
    "fullName": "Deepak Jaiswal"   // can never be accessed using console.lopg(jsUser.fullName)
}

// console.log(jsUser.email)
// console.log(jsUser["email"])  // better method
// console.log(jsUser["fullName"])   // Deepak Jaiswal
// console.log(typeof jsUser.mySym)  // string, not used as symbol
// console.log(jsUser[mySym])        // myKey1

jsUser.email = "deejai6281@gmail.com"  // to change the values

// Object.freeze(jsUser)  // this will freeze the value i.e, no changes are allowed now  // object is freezed
jsUser.email = "hitesh@microsoft.com"
// console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello JS user");
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);   // referring to name
}

// console.log(jsUser.greeting)    // [Function (anonymous)]
console.log(jsUser.greeting())  // Hello JS user
console.log(jsUser.greetingTwo());   // Hello JS user, Hitesh