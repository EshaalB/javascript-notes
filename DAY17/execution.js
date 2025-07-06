// THREE TYPES OF EXECUTION CONTEXT

// 1. GLOBAL EXECUTION CONTEXT
// Default context
var globalVar = "Global"; // Global scope
console.log("Global this:", this); // output : {}

// 2. FUNCTION EXECUTION CONTEXT  
// Created when function called
function testFunction() {
    var funcVar = "Function"; // Function scope
    console.log("Function this:", this); // output: {}
}
testFunction();

// Method context
const obj = {
    name: "Object",
    method: function() {
        console.log("Method this:", this); // output: 
        // { name: 'Object', method: [Function] }
    }
};
obj.method();

// 3. EVAL EXECUTION CONTEXT
// Created by eval()
var evalVar = "Original";
eval("evalVar = 'Modified'; console.log('Eval context');"); // output:
//  Eval context
console.log("After eval:", evalVar); // output: Modified
