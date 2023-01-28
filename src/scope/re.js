var firstName; // declarando value: undefined
firstName = 'Jeffer';
console.log(firstName); // 🟢 Jeffer

var lastName = 'Steven'; // declarando y asignando
lastName = 'Kim'; // Reasignando
console.log(lastName); // 🟢 Kim

var secondName = 'Mario'; // declarando y asignando
var secondName = 'Maria'; // redeclarando y reasignando
console.log(secondName); // 🟢 Maria


// let
let fruit = 'Apple'; // delarando y asignando
fruit = 'Kiwi'; // reasignando 
console.log(fruit); // 🟢 Kiwi

// let fruit = 'Banana'; // Reasignar y Redeclarar = 🔴Error


// const
const animal = 'dog'; // declarando y asignando
// animal = 'cat'; // reasignar = 🔴Error
//  animal = 'bunny'; // redeclarar y reasignar = 🔴Error

const vehicules = [];
vehicules.push('Chevrolet 🏎️');
console.log(vehicules);

vehicules.pop()
console.log(vehicules);