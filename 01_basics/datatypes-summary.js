// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3   // JS is DYNAMICALLY TYPED

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);  // false

const bigNumber = 565449854594654648n  // putting n at last maakes it bigInt

// Reference (Non-Primitive)

// Arrays, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}



// | Data Type     | Example         | `typeof` Result |
// | ------------- | --------------- | --------------- |
// | **String**    | `"hello"`       | `"string"`      |
// | **Number**    | `100`, `100.3`  | `"number"`      |
// | **Boolean**   | `true`, `false` | `"boolean"`     |
// | **null**      | `null`          | `"object"` ❗    |
// | **undefined** | `let x;`        | `"undefined"`   |
// | **Symbol**    | `Symbol('id')`  | `"symbol"`      |
// | **BigInt**    | `123456789n`    | `"bigint"`      |


// | Data Type    | Example                            | `typeof` Result |
// | ------------ | ---------------------------------- | --------------- |
// | **Array**    | `["a", "b", "c"]`                  | `"object"` ❗    |
// | **Object**   | `{ name: "Hitesh", age: 22 }`      | `"object"`      |
// | **Function** | `function() { console.log("hi") }` | `"function"` ✅  |
