let score = "33abc"

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN (Not a Number) although it's type is number itself
// true => 1 false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let StringNumber = String(someNumber)
// console.log(StringNumber);
// console.log(typeof StringNumber);

//***************************operations*****************************

let value = 3
let negValue = -value
// console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)
// console.log(2/3)
// console.log(2%3)

let str1 = "hello"
let str2 = " hitesh"
let str3 = str1 + str2
// console.log(str3)

// console.log("1"+2)  // 12
// console.log(1+"2")  //12
// console.log("1"+2+2)  //122
// console.log(1+2+"2") // 32

// console.log(+true);  // 1

let num1, num2, num3 

num1 = num2 = num3 = 2+2  // Not readable easily

let gameCounter = 100
gameCounter++
// console.log(gameCounter);  // 101

let x = 3;
const y = x++;
// console.log(x, y)  // 4 3 
let a = 3
const b = ++a
console.log(a, b)  // 4 4 