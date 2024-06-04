// Variable Scoping
// Closure
// Generators
// Modules
// Exponentiation Operator
// Optional chaining
// Object Methods (keys,values,freez,entries)
// Destructuring //p
// Template literals //p
// Destructuring //p
// Default parameters //p
// Rest parameter //p
// Spread Operator //p
// Arrow functions  //p
// Enhanced object literals //p
// Iterators & For..of  //p
// Map  //p
// Array methods  //p
// Higher-order function  //p
// CallBack  //p
// Promises  //p
// Ternary Operator //p





// const user={
//     username :'raza',
//     email : "anusraza268@gmail.com",
//     age:20
// }
// const {username,email,age}=user
// console.log(username);


// const fruit=['apple','banana','graphes']
// const[,,two]=fruit
// console.log(two);


// // spreed operator
// const fruit = ["apple", "banana", "orange", "mango"];
// const arr2=['water ',...fruit]
// console.log(arr2);
// const newArr = arr2.concat(fruit);
// console.log(newArr);


// rest operator
// function hello(...username) {
//     console.log(username);
    
// }
// hello("abdullah", "usman", "ammar", "zain", "hassan");



// ternary operator
const num=220
if (num > 50) {
    console.log('passed');
}else{
    console.log('failed');
}

num >50 ? console.log('passed'):console.log('failed');


num>70 ? console.log('bathren'):num> 50 ? console.log('passed'):console.log('failed');


// default parmeter
function greatuser(username='abd') {
    console.log('hello ${username}');
    
}
greatuser()


// Enhanced object literals 
let name ='abd'
let age =25

let user={
    name,age
}
console.log(user);