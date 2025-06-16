// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

// console.log("2">1);  // true
// console.log("02">1);  // true

// console.log(null>0);  // false
// console.log(null == 0);  // false
// console.log(null>=0);  // true


// In javascript (equality check ==) and (comparisions <, >, <=, >=) work differently
// comparisons convert null to a number, treating it as 0
// hence, null>=0 is true but null>0 is false

// === strict check , this checks datra type as well

console.log("2"===2)