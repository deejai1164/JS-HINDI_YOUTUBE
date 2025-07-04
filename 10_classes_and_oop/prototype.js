// let myName = "hitesh      "

// console.log(myName.length);   // 12
// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}
// This adds a method hitesh() to the Object prototype, meaning every object in JavaScript (including arrays, objects, functions, etc.) will now have access to this method via inheritance.

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}
// This adds the method heyHitesh() specifically to arrays only. So only arrays will have access to this method.

// heroPower.hitesh()    // hitesh is present in all objects
// myHeros.hitesh()        // hitesh is present in all objects
// myHeros.heyHitesh()         // Hitesh says hello
// heroPower.heyHitesh()          // TypeError: heroPower.heyHitesh is not a function
//heyHitesh() is defined only on Array.prototype — not on Object.prototype


//    function
//              \
//               \
//                \
//     Array ----- Object  --->  null
//               /
//              /
//             /
//     String 


// ✅ Short Summary: JavaScript Prototype Chain
// Every object in JavaScript inherits from a prototype, forming a prototype chain.
// At the top is Object.prototype, whose prototype is null — marking the end of the chain.
// Array and String inherit from Object, so they can use methods from Object.prototype.
// Functions are special:
// All constructors (Object, Array, String, etc.) are functions.
// All functions are instances of Function.
// Function itself is a function — it self-inherits.
// That's why methods added to Object.prototype (like hitesh()) are accessible to arrays, strings, and all objects.


// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport     // Here, all TA-support objects can share the same availability flag from TeachingSupport.
}

Teacher.__proto__ = User        // Teacher will now inherit properties from User.


// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()

// Object.setPrototypeOf(TeachingSupport, Teacher)
// → Makes TeachingSupport inherit from Teacher, so it gets access to Teacher's and User's properties.

// String.prototype.trueLength = function() {...}
// → Adds a custom method to all strings that logs the trimmed length of the string.

// Now any string can use .trueLength() to get its actual length without extra spaces.