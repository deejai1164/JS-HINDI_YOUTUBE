function multiplyBy5(num){
    return num*5
}
multiplyBy5.power = 2

console.log(multiplyBy5(5));                // 25
console.log(multiplyBy5.power);            // 2
console.log(multiplyBy5.prototype);       // {}

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)

chai.printMe()


/*
Here's what happens behind the scenes when the new keyword is used:
1. A new object is created: The new keyword initiates the creation 
   of a new JavaScript object.
2. A prototype is linked: The newly created object gets linked to 
   the prototype property of the constructor function.
3. The constructor is called: The constructor function is called 
   with the specified arguments and `this` is bound to the new object.
4. The new object is returned: If constructor doesn't return an 
   object, the new object is returned by default.
*/
