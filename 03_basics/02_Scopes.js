// let a = 10
// const b = 20
// var c = 30

// console.log(a);   // 10
// console.log(b);   // 20
// console.log(c);   // 30

{}   // scope

if(true){
    let a = 10
    const b = 20
    var c = 30
}


// console.log(a);   // a is not defined outside of scope
// console.log(b);   // b is not defined outside of scope
// console.log(c);   // 30   // var here is mysterious


// ** Block scope and Global scope
let a = 300
if(true){
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
}

// console.log(a)

// output

// INNER:  10
// 300


function one(){
    const username = "deepak"

    function two(){
        const website = "youtube"
        console.log(username);
    }                                         // in nested format usually child functions can access the parent functions
    // console.log(website);
    two()
}
// one()

if(true){
    const username = "deepak"
    if(username === "deepak"){
        const website = " youtube"
        // console.log(username+website)    // deepak youtube
    }
    // console.log(website);   //error
}
// console.log(username);  // error


// ++++++++++++++++++++++++INTERESTING+++++++++++++++++++++++++++++++++

console.log(addone(5))
function addone(num){
    return num+1
}



console.log(addTwo(5))
const addTwo = function(num){    // Hoisting // here function is again hold in another variable
    return num+2
}
