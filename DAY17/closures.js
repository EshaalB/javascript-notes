// CLOSURES 

// 1. BASIC CLOSURE
function outer() {
    let message = "Hello from outer";

    function inner() {
        console.log(message); // output: Hello from outer
    }

    return inner;
}

const basicClosure = outer();
basicClosure();

// 2. CLOSURE WITH PARAMETERS
function createCounter(initialValue) {
    let count = initialValue;

    return {
        increment: function () {
            count++;
            console.log("Count:", count); // output: Count: 1, Count: 2
        },
        getCount: function () {
            console.log("Current count:", count); // output: Current count: 0
        }
    };
}

const counter = createCounter(0);
counter.getCount(); // output: Current count: 0
counter.increment(); // output: Count: 1

// 3. COMMON MISTAKE - LOOP CLOSURE
console.log("=== LOOP CLOSURE MISTAKE ===");

// WRONG WAY - All functions reference same variable
for (var i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log("Wrong way - i:", i); // output: Wrong way - i: 3 (3 times)
    }, 100);
}

// RIGHT WAY - Using let (block scope)
for (let j = 0; j < 3; j++) {
    setTimeout(function () {
        console.log("Right way - j:", j); // output: Right way - j: 0, 1, 2
    }, 200);
}

// 4. CLOSURE WITH OBJECTS
function createPerson(name) {
    let privateAge = 0;

    return {
        getName: function () {
            console.log("Name:", name); // output: Name: John
        },
        setAge: function (age) {
            privateAge = age;
            console.log("Age set to:", privateAge); // output: Age set to: 25
        }
    };
}

const person = createPerson("John");
person.getName(); // output: Name: John
person.setAge(25); // output: Age set to: 25
