const marvelHeroes = ['thor','iron',"spiderman"]
const dc = ['superman ', 'flash', 'batman']

// marvelHeroes.push(dc)

// console.log(marvelHeroes[3][1]);

// const both = marvelHeroes.concat(dc)
// console.log(both);

const all_hero = [...marvelHeroes,...dc]
// console.log(all_hero)

const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_anotherArr = anotherArr.flat(Infinity)
// console.log(real_anotherArr);

console.log(Array.isArray("Sahil"));
console.log(Array.from("Sahil"));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));
