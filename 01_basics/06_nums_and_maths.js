const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));  // two digits after decimal

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++++++++++++++  MATHS  ++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());  // Any random value between 0 to 1
console.log((Math.random()*10) + 1);  // +1 implies range between 1 to 9 because Math.random can some time give value 0
console.log(Math.floor(Math.random()*10) + 1);  

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)   // max and min used to specify a certain range in which we want answer and adding min describes min value from the range we needed