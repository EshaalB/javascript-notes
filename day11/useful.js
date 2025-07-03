// // General Functions

// const t1 = setTimeout(() => {
//     console.log("Hello");

// }, 2000); // prints Hello after 2 seconds

// let i = 0;
// const t2 = setInterval(() => {
//     console.log(i);
//     i++;
// }, 5000); // prints 0,1,2,3... after every 5 seconds

// clearTimeout(t1) // cancels t1
// clearInterval(t2) // cancels t2

// let str = "Eshaal"
// let str1 = "13"
// let str2 = "13.010"
// let num = parseInt(str)
// let num1 = parseInt(str1)
// let num2 = parseFloat(str2)
// console.log(num); //NAN
// console.log(num1);//13
// console.log(num2);//13.01

// console.log(isFinite(num1)); //true

// let jsString = "console.log(1)"
// eval(jsString)

// // DATE AND TIME

// const d1 = new Date();
// console.log(d1); // 2025-06-27T14:17:21.684Z
// const currDate = Date.now();
// console.log(currDate); //1751033962521 milliseconds

// console.log(d1.getFullYear());// 2025
// console.log(d1.getDay()); //5th day Friday
// console.log(d1.getMonth()); // 5 (it starts from 0-11 thats why)
// // june
// d1.setFullYear(2026)
// console.log(d1.getFullYear());//2026

// const str = d1.toLocaleString()
// console.log(str); // date with time


// String Methods

let str = "Eshaal"
console.log(str.includes("l")); //true
console.log(str.includes("e")); //false

console.log(str.startsWith("E"));//true
console.log(str.endsWith("A"));//false

console.log(str.repeat(3));//EshaalEshaalEshaal
console.log(str.padStart(10, "*")); // "****Eshaal"
console.log(str.padEnd(10, "*"));   // "Eshaal****"

let messy = " eshaal "
console.log(messy.trimStart());    // "eshaal   "
console.log(messy.trimEnd());      // "   eshaal"
console.log(str.charCodeAt(0));    // 69 (Unicode for 'E')

// fromCharCode()
console.log(String.fromCharCode(69)); // "E"

// Math Functions
let num = 4.7;
let negative = -8;
let nums = [2, 5, 7];


console.log(Math.random()); // random number between 0 and 1
console.log(Math.floor(num)); // 4
console.log(Math.ceil(num));  // 5
console.log(Math.round(num)); // 5
console.log(Math.trunc(num)); // 4
console.log(Math.abs(negative)); // 8
console.log(Math.max(...nums)); // 7
console.log(Math.min(...nums)); // 2
console.log(Math.pow(2, 3)); // 8
console.log(Math.sqrt(16)); // 4



// Template Literals
let name = "Eshaal";
let age = 21;
console.log(`My name is ${name}, I am ${age}.`);

// Spread Operator (Arrays & Objects)
let a1 = [1, 2], a2 = [3, 4];
console.log([...a1, ...a2]);            // [1, 2, 3, 4]

let o1 = { name: "Eshaal" }, o2 = { age: 21 };
console.log({ ...o1, ...o2 });          // { name: "Eshaal", age: 21 }







