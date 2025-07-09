// Custom Events
const loginEvent = new CustomEvent("userLoggedIn", {
    detail: {
        username: "eshaal",
        role: "admin"
    }
});

// Listen for the custom event
document.addEventListener("userLoggedIn", (e) => {
    console.log("Custom Event Triggered");
    console.log("Welcome", e.detail.username); // Access data
});

// Trigger the event
document.dispatchEvent(loginEvent);

//Generator and iterator 
function* myGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = myGenerator();
console.log(gen.next()); // { value: 1, done: false } [iterator ]
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }


// Currrying 

// Normal function
function multiply(a, b) {
    return a * b;
}

// Curried version
function curriedMultiply(a) {
    return function (b) {
        return a * b;
    };
}

const double = curriedMultiply(2);
console.log(double(5)); // 10


const multiply = a => b => a * b;
console.log(multiply(3)(4)); // 12


//Memoization
function memoize(fn) {
    const cache = {};
    return function (x) {
        if (cache[x]) {
            console.log("from cache");
            return cache[x];
        }
        const result = fn(x);
        cache[x] = result;
        return result;
    };
}

function slowSquare(n) {
    console.log("calculating...");
    return n * n;
}

const fastSquare = memoize(slowSquare);

console.log(fastSquare(4)); // calculating... then 16
console.log(fastSquare(4)); // from cache → 16

