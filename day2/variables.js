//  const name= "Eshaal"
// var age =19
// let userId = "eshaaldev"

//  console.table({name, age, userId})

//   Global scope variables
// const userID = "eshaaldev";       // const: cannot be changed or redeclared
// var userName = "Eshaal";          // var: can be redeclared and changed

//  🔵 1. FUNCTION SCOPE 
// function getUserId() {
//    This userID is local to the function (does NOT affect global userID)
//   let userID = "eshaaldev123";   // let: block-scoped, 
//   can be changed (not redeclared in same block)
//   console.log("Inside function:", userID); // Output: "eshaaldev123"
// }

// getUserId(); // call the function

//  Redeclaring userName using var (✅ Allowed)
// var userName = "Eshaal M";       // var allows re-declaration in the same scope
// console.log("Global userName:", userName); // Output: "Eshaal M"

//  🟣 2. BLOCK SCOPE 
// {
//   let userID = "eshaaldev456";   // block-scoped, separate from global 
//    and function scopes
//   console.log("Inside block:", userID); // Output: "eshaaldev456"
// }
//  const userID = "eshaaldev789"; 
//  ❌ Error: Identifier 'userID' has already been declared


console.log(name); // undefined no error 
var name 

//temporary dead zone (TDZ) for let and const variables
log(age); // ReferenceError: Cannot access 'age' before initialization
let age = 19; 

log(userId); // ReferenceError: userId is not defined
const userId = "eshaaldev"; 

//The Temporal Dead Zone is the time between 
// when a variable is hoisted to the top of its scope 
// and when it is actually declared in the code.

// During this time:

// You can’t access the variable.

// Trying to do so results in a ReferenceError.