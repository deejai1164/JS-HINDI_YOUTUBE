const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");  // older mathod

// IMP**
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  // modern way => STRING INTERPOLATION

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__)  //  It points to the prototype object from which the object was created

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4);  // answer do not include 4th index (0-3) only
// console.log(newString)

const anotherString = gameName.slice(-8, 4)  // 4 characters from backward
// console.log(anotherString);

const newStringOne = "    hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());  // removes starting and ending indexes

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))  // find and replace  // https://hitesh.com/hitesh-choudhary

console.log(url.includes('hitesh')) // true

console.log(gameName.split('-'))  // for => ('hitesh-hc-com') => [ 'hitesh', 'hc', 'com' ]




// all methods of String
// | Method                                                                                                                     | Purpose                        |
// | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
// | `.at`, `.charAt`, `.charCodeAt`, `.codePointAt`                                                                            | Access characters/code points  |
// | `.includes`, `.startsWith`, `.endsWith`, `.indexOf`, `.lastIndexOf`, `.match`, `.matchAll`, `.search`, `.localeCompare`    | Search & compare strings       |
// | `.slice`, `.substring`, `.substr`, `.split`, `.trim*`                                                                      | Extract or split               |
// | `.concat`, `.repeat`, `.padStart`, `.padEnd`                                                                               | Compose or build up strings    |
// | `.replace`, `.replaceAll`                                                                                                  | Modify content                 |
// | `.toLowerCase`, `.toUpperCase`, `.toLocaleLowerCase`, `.toLocaleUpperCase`, `.normalize`, `.isWellFormed`, `.toWellFormed` | Transform or normalize strings |
// | `.toString`, `.valueOf`, `[Symbol.iterator]`                                                                               | Conversion & iteration         |