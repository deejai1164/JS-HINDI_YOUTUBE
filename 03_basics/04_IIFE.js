// Immediately Invoked Function Expressions (IIFE)    

// IMP **It helps avoid polluting the global scope by creating variables that exist only inside the function. **

// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai() // DB CONNECTED   

// now next, instead of writing chai we enclose the function in () and use it directly as below

// named IIFE
(function chai(){
    console.log(`DB CONNECTED`);
})();    // DB CONNECTED      // ** IMP  necessary to add ;semicolon to end the IIFE function

// unnamed IIFE
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')           // DB CONNECTED TWO hitesh

// chai('hitesh') // as similar to above