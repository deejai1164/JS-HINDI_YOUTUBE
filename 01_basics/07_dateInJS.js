let myDate = new Date()
// console.log(myDate.toString());            // Tue Jun 17 2025 10:39:37 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());        // Tue Jun 17 2025
// console.log(myDate.toLocaleDateString());  // 6/17/2025
// console.log(myDate.toTimeString());        // 10:39:37 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.getTimezoneOffset());   // 0

// INTERVIEW**
// console.log(typeof myDate);  // object

// let myCreatedDate = new Date(2023, 0, 23)        // Mon Jan 23 2023
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)  // 1/23/2023, 5:03:00 AM
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());   // 1/14/2023, 12:00:00 AM


let myTimeStamp = Date.now()
// console.log(myTimeStamp);  // 1750158778616
// console.log(myCreatedDate.getTime());  // 1673654400000      // values in milliseconds for comparison


// **INTERVIEW
// console.log(Math.floor(Date.now()/1000));   // to convert in second, divide by 1000 and remove decimal values use floor

let newDate = new Date()
console.log(newDate);                // 2025-06-17T11:25:41.757Z
console.log(newDate.getMonth()+1);   // 6
console.log(newDate.getDay());       // 2

newDate.toLocaleString('default',{
    weekday : "long"
})