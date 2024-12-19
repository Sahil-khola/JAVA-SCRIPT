
// var :- var is globally scoped while let & const are blocked scoped 
// var can be update and re-declared its scope

// var can not use , using let 
// var a = 45;
// let b = 'Sahil';
// var c = null;
// let :- let can be updated but not re-declared
// var d = undefine;
let b = 'khola';
let c = null;
{
    let b = 'this'
    console.log(b);
}

console.log(b);

const author = 'khola';
// let author = 5 can not use it throw a error 
// const:- const cannot update and re-declared