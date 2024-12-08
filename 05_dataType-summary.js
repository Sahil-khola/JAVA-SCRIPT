// # Primitive Datatype

// 7 type : string, number, boolean, null, undefine, symbol, BigInt

const score = 100;
const scoreValue = 100.3;

constisloggedIn = false;
const outsideTop = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123') 

console.log(id === anotherId);

const bigNumber = 2572357454544535n



// # Refrence (non primitive datatype)

// Array, objects, functions

const heros = ['saktiman','naagraj','doga']
let myObj = {
    name : "sahil",
    age : 20,
}

const myFunc = function(){
  console.log('helllo i am sahil khola ');
  
}
console.log(typeof myFunc)



// *************************************************************

// Stack(primitive) , heap(non primitive)


let myName = "Sahilkhola"
let anotherName = myName
anotherName = "Sahil yadav"
console.log(myName);
console.log(anotherName);

let user0ne = {
  user: "user@gmail.com",
  upi:"user@ybl"
}
let userTwo = user0ne;

userTwo.user = "sahilkhola7202@gmail.com"
console.log(user0ne.user)
console.log(userTwo.user)