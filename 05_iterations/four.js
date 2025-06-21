// for in
// ******
// Used for: Iterating over enumerable property names (keys) of an object.
// Returns: The keys (property names) of the object or array (as strings).


const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for(const key in myObject){
    //console.log(key);
}
// output

// js
// cpp
// rb
// swift

for(const key in myObject){
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

// output

// js shortcut is for javascript
// cpp shortcut is for c++
// rb shortcut is for ruby
// swift shortcut is for swift by apple

// Array
const programming = ["js", "rb", "py", "java", "cpp"]
for(const key in programming){
    //console.log(key);
}

// output
// 0
// 1
// 2
// 3
// 4

for(const key in programming){
    // console.log(programming[key]);
}
//output
// js
// rb
// py
// java
// cpp


const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "UNITED STATES OF AMERICA")
map.set('FR', "FRANCE")
map.set('IN', "INDIA")
for(const key in map){
    console.log(key);
}

// output => nothing
// as map is not iteratable