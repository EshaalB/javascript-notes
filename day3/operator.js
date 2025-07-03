// ✅ Basic Arithmetic Operators
let pos = 4;
let neg = -4;

console.log(2 + 2);         // 4       → Simple addition
console.log(pos - neg);     // 8       → -(-4) = +4, so 4 + 4
console.log(pos + neg);     // 0       → 4 + (-4)
console.log(pos ** 2);      // 16      → Exponentiation

// 🔄 Type Coercion with Numbers and Strings
console.log(1 + "3");       // "13"    → Number + String = String (concatenation)
console.log(1 - "3");       // -2      → String "3" becomes number
console.log("1" * 3);       // 3       → "1" coerced to number
console.log("1" + 3);       // "13"    → Number converted to string
console.log("1" - 3);       // -2      → "1" coerced to number

// 😵 Complex Coercion Chains
console.log(1 + "1" + 2 + 2 + "3");  // "11223" → Left to right: everything 
// becomes string after first concat
console.log(1 + 1 + "3");            // "23"    → 1+1=2, then string concat
console.log("3" + 1 - 1 + "2");      // "3112"  → "3"+1="31", -1=30, +"2"="302"
console.log("10" - "4" - "3" - 2 + "5"); // "15" → All subtractions are numeric, 
// then + "5" = string

// 🧠 Unique & Interesting Coercion Cases
console.log("5" * []);              // 0       → [] becomes 0
console.log("5" * [2]);             // 10      → [2] becomes 2
console.log("5" * [2, 3]);          // NaN     → [2,3] becomes invalid number
console.log(null + 1);             // 1        → null coerced to 0
console.log(undefined + 1);        // NaN      → undefined can't convert to number
console.log(true + 1);             // 2        → true = 1
console.log(false + 1);            // 1        → false = 0


//  Assignment Operators  

let num = 5;
console.log(num++); // 5
// Post-increment: value is logged first, then incremented (num becomes 6)

let num1 = 5;
console.log(++num1); // 6
// Pre-increment: value is incremented first, then logged

// Compound Assignment Operators
num *= 2;
console.log(num); // 12 → num = 6 * 2

num1 /= 2;
console.log(num1); // 3 → num1 = 6 / 2

num1 %= 2;
console.log(num1); // 1 → num1 = 3 % 2

num += 3;
console.log(num); // 15 → num = 12 + 3

num -= 5;
console.log(num); // 10 → num = 15 - 5

 // Comparison Operators

console.log(5 == '5');             // true
console.log(5 === '5');            // false
console.log(5 > 3);                // true
console.log(null >= 0);            // true
console.log(null === undefined);   // false
console.log([] == 0);              // true
console.log(13 !== 13);            // false
console.log(undefined == 0);       // false
console.log(undefined >= 0);       // false
console.log("2" > 1);              // true
console.log("02" > 1);             // true

// Loose equality (`==`) allows type coercion, 
// strict equality (`===`) does not.
// Comparisons with `null`, `undefined`,
//  or empty arrays can produce unexpected results.
// Strings compared with numbers are converted to numbers.
// Always prefer `===` and avoid comparing with `undefined` 
// or `null` directly unless intentional.

// Logical Operators

console.log(true && false);         // false
console.log(true || false);         // true
console.log(!false);                // true

console.log(0 && "Hello");          // 0
console.log("Hi" && 123);           // 123
console.log(null || "default");     // "default"
console.log("" || 42);              // 42
console.log("JS" && undefined);     // undefined

console.log(null ?? "fallback");    // "fallback"
console.log(0 ?? 100);              // 0
console.log(undefined ?? false);    // false

// `&&` returns first falsy value or last truthy one;
//  `||` returns first truthy value.
// `!` negates the truthiness of a value.
// `??` (Nullish Coalescing) returns the right-hand side 
// **only** if the left is `null` or `undefined`.
// Useful for setting defaults and checking presence 
// without triggering on `0`, `false`, or `""`.


// Bitwise Operators

console.log(5 & 1);     // 1   → 0101 & 0001 = 0001
console.log(5 | 1);     // 5   → 0101 | 0001 = 0101
console.log(5 ^ 1);     // 4   → 0101 ^ 0001 = 0100
console.log(~5);        // -6  → ~0101 = -(0101 + 1) = -6
console.log(5 << 1);    // 10  → 0101 << 1 = 1010
console.log(5 >> 1);    // 2   → 0101 >> 1 = 0010
console.log(-5 >> 1);   // -3  → Signed right shift (keeps sign bit)
console.log(5 >>> 1);   // 2   → Unsigned right shift (fills 0s)


// Bitwise operators work on 32-bit binary representations of numbers.
// `&`, `|`, `^` perform AND, OR, XOR on each bit.
// `~` inverts the bits and adds 1 (2's complement).
// `<<` and `>>` shift bits left/right; `>>>` shifts right 
// with 0-fill (ignores sign).
// Mainly used in low-level tasks like performance flags, 
// raphics, permissions, or binary data handling.


// Special operators 

