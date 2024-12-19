// NN SS BB U
// Primitive Datatype
/* 
N = NULL
N = NUMBER
S = SYMBOL
S = STRING
B = BOOLEAN
B = BIGINT
U = UNDEFINED */

let a = null;
let b = 345;
let c = true;
let d = BigInt("567") + BigInt('3');
let e = 'khola';
let f = Symbol("i am symbol");
let g = undefined;
// console.log(a,b,c,d,f,g);
// console.log(typeof c);

// NON-Primitive Datatype
// object array function

// object :-
 const item = {
    'sahil': true,
    'khola': false,
    'karan': 67,
    'rinku': undefined
 }
//  console.log(item['khola'])

// Array:-
 let name = ['Sahil','khola','yadav']
 console.log(name[1]);

// function:-

function func() {
    console.log("khola")
}
func()
 