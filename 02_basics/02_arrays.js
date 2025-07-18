const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros)
// console.log(marvel_heros);    // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heros[3][1]);    // flash

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);     // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// push works on existing array whereas concatenate returns new array


// Spread operator => analogy => take a glass of glass drop it, it will spread all over

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);        // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Hitesh"))  // false
console.log(Array.from("Hitesh"))


// **IMP for interview
console.log(Array.from({name: "hitesh"})) // []       
// because we have not mentioned use the keys to from the array hence return empty list


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))