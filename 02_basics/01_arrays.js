// Array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["Shaktimaan", "naagraaj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[0]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)  // to add at the start of the array
// myArr.shift()   // removes the first element
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);  // string


// slice, splice

console.log("A ", myArr);    // A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1,3)
console.log(myn1);           // [ 1, 2 ]
console.log("B ", myArr)     // B  [ 0, 1, 2, 3, 4, 5 ]


const myn2 = myArr.splice(1,3)
console.log("C ", myArr);    // C  [ 0, 4, 5 ]  // Manipulated the original string and popped out elements(1,3) from original array
console.log(myn2);           // [ 1, 2, 3 ]

// Slice and splice => the only difference is NOT only the last value is included in splice where as in slice it is not printed instead splice manipulate the original array and removes the given range of values from original array