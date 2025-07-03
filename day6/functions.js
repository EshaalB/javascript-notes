// // //functions

// // //Functions can be hoisted but not when they are defined as variables
// // printMessage();//This is my secret message
// // function printMessage() {
// //     console.log("This is my secret message");
// // }

// // let message = "This is my secret message 1";

// // function printMessage1(message) {
// //     console.log(message); //This is my secret message 1
// // }
// // printMessage1(message);

// // //also Javascript functions cannot be overloaded meaning
// // // you cannot have two functions with the same name

// // const greet = function sayHi() {
// //     return console.log("Hello, World!");
// // }
// // console.log(greet()); // hello world + undefined
// // sayHi(); // This will throw an error because sayHi is not defined
// // //  in the global scope
// // //correct way to call the function
// // greet(); // This will work because greet is defined in the global scope


// //Arrow Functions
// const greet = () => {
//     return console.log("Hello, World!");
// }
// greet(); // Hello, World!

// const sum = (a, b) => {
//     return (a + b);
// }
// console.log(sum(10, 3)); // 13


// //Recursion
// function factorial(n) {
//     if (n === 0) return 1; //Base case : it stops recursion
//     if (n < 0)
//         return "Factorial is not defined for negative numbers";
//     return n * factorial(n - 1);
// }
// console.log(factorial(5)); // 120

// function sumofNumbers(n) {
//     if (n === 0) return 0;
//     return n + sumofNumbers(n - 1);
// }
// console.log(sumofNumbers(4)); //10

// // Function Types

// // Named Function Expression
// const greetByName = function sayHi(name) {
//     console.log("Hey, " + name);
// };
// greetByName("Mikal");

// // IIFE (Immediately Invoked Function Expression)
// (function () {
//     console.log("This runs immediately!");
// })();

// // Callback Function
// function process(callback) {
//     callback("Task done!");
// }

// process(function (message) {
//     console.log(message);
// });
// // Higher-Order Function
// function multiplier(factor) {
//     return function (number) {
//         return number * factor;
//     };
// }
// const double = multiplier(2);
// console.log(double(5)); // 10

// // Parameter Types

// // Required Parameter
// function greetUser(name) {
//     console.log("Hello " + name);
// }
// greetUser("Eshaal");

// // Default Parameter
// function greetWithDefault(name = "Guest") {
//     console.log("Hello " + name);
// }
// greetWithDefault(); // Hello Guest
// // Rest Parameters
// function sumAll(...numbers) {
//     return numbers.reduce((acc, val) => acc + val, 0);
// }
// console.log(sumAll(1, 2, 3)); // 6
// // Callback as Parameter
// function doMath(x, y, operation) {
//     return operation(x, y);
// }

// const result = doMath(5, 3, function (a, b) {
//     return a + b;
// });
// console.log(result); // 8
