// if

// if(condition){   // condition should be true to implement internal code of if

// }

const isUserLoggedIN = true
if(isUserLoggedIN){

}


// if(2=="2"){          // in '==' does not matter datatype
//     console.log("executed");    // executed
// }

// if(2=="2"){          // in '===' datatype also matter since datatype are not same if condition will become false and inner code do not run
//     console.log("executed");    
// }

// const score = 200
// if(score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }else if(score>150){
//     console.log("greater than 150");
// }else if(score>175){
//     console.log("score is more than 175");
// }else{
//     console.log("greater than 175 ")
// }


const userLoggedIn = true
const debitcard = true;
if(userLoggedIn && debitcard){
    console.log("Allow to purchase items");
}