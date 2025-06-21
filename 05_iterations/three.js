// for of

// Used for: Iterating over iterable objects (like arrays, strings, maps, sets, etc.).
// Returns: The values of the iterable.

// const arr = [1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);
// }

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "UNITED STATES OF AMERICA")
map.set('FR', "FRANCE")
map.set('IN', "INDIA")

// console.log(map);
// output

// Map(3) {
//   'IN' => 'INDIA',
//   'USA' => 'UNITED STATES OF AMERICA',
//   'FR' => 'FRANCE'
// }


for(const key of map){
    //console.log(key);
}
// output

// [ 'IN', 'INDIA' ]
// [ 'USA', 'UNITED STATES OF AMERICA' ]
// [ 'FR', 'FRANCE' ]

for(const [key, value] of map){
    console.log(key, ':-', value);
}
// output

// IN :- INDIA
// USA :- UNITED STATES OF AMERICA
// FR :- FRANCE

// const myObject = {
//     game1: 'NFS',
//     game2: 'spiderman'
// }

// for(const [key, value] of myObject){
//     console.log(key, ':-', value);
// }

// TypeError: myObject is not iterable
// for of loop is not operatable for objects here,  it has other methods for iteration
// but for of loop is valid for maps easily


