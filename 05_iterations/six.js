// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// })

// console.log(values);

// *********
//In filter, agar scope{} open karte h to usme 'return' use karna hoga
// And if scope open nhi karte to directly without return condition laga sakte h

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4)
// console.log(newNums);    // [ 5, 6, 7, 8, 9, 10 ]

// const newNums = myNums.filter( (num) => {
//     num > 4
// } )
// console.log(newNums);   // []

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )
// console.log(newNums);  // [ 5, 6, 7, 8, 9, 10 ]

const newNums = []

myNums.forEach( (num) => {
    if(num>4){
        newNums.push(num)
    }
} )
// console.log(newNums);   // [ 5, 6, 7, 8, 9, 10 ]