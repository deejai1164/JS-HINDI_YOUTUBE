const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){                 //  simulates an async task using a 1-second delay.
        console.log('Async task is compelete');
        resolve()                         //  tells the Promise it completed successfully.
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){           // A new Promise is created directly, not stored in a variable.
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "chai", email: "chai@example.com"})    // This means the async task is successfully finished and returns this object.
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Deepak", password: "12321"})
        }else{
            reject('Error: Something went wrong')
        }
    }, 1000)
})


// This code is a promise chain:
// It starts with a resolved or rejected promise named promiseFour.
// If the promise resolves, it runs the functions in .then() blocks one after another.
// If it rejects, it goes to the .catch() block.
// Regardless of what happens, the .finally() block always runs in the end.

promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Javascript", password: "12321"})
        }else{
            reject('Error: JS went wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()



// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     }catch(error){
//         console.log("E: ", error);
//     }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => console.log(error));
