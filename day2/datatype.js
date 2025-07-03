"use strict"; // use new JS features (strict mode)

// JavaScript is dynamically typed
let num = '1acs';
console.log("Original value:", num);
console.log("Type of num (before conversion):", typeof(num));
console.log("Type (without parentheses):", typeof num); // same result

// Since JavaScript is dynamically typed, we can attempt to restrict num to be a number
let fixNum = Number(num); // tries to convert '1acs' to a number
console.log("Converted value:", fixNum);
console.log("Type after conversion:", typeof fixNum);

// Explanation: '1acs' is not a clean numeric string, so Number() returns NaN
// NaN is still of type 'number' in JavaScript — tricky behavior!

// Another example: Boolean conversion
let state = 0;
let boolState = Boolean(state); // converts number to boolean
console.log("Original numeric state:", state);
console.log("Converted to boolean:", boolState);
console.log("Type of boolState:", typeof boolState);

// We need to keep in mind that our variable should have values that can be converted
// JavaScript is tricky in this regard with less restrictions, so it is 
// up to us to keep check

// ✅ More Examples to Clear the Concept
console.log("Number('123') =", Number("123")); // ✅ 123
console.log("Number('123abc') =", Number("123abc")); // ❌ NaN (Not a Number)
console.log("Boolean('') =", Boolean("")); // ❌ false (empty string is falsy)
console.log("Boolean('0') =", Boolean("0")); // ✅ true (non-empty string is truthy)
console.log("Boolean(0) =", Boolean(0)); // ❌ false (zero is falsy)
console.log("Boolean(1) =", Boolean(1)); // ✅ true

// This shows how JS loosely converts between types, which can cause bugs


console.log(typeof(null)); // object (Historical bug — worth noting)

// falsy values : gives false as output 
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(0n));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

// truthy values : gives true as output 
console.log(Boolean(3))        
console.log(Boolean("0"))         
console.log(Boolean([]))        
console.log(Boolean(-4))   
console.log(Boolean({}))    
//functions as well 
