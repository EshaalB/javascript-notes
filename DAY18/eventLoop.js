function greet() {
    let message = "Hello"; // stored in stack
    const user = { name: "Eshaal" }; // object stored in heap
  }
//   message goes to the stack
  
//   user (object) goes to the heap
  
//   But the reference to user is stored in the stack


console.log("Start"); // Call Stack , runs first 

setTimeout(() => {
  console.log("Timeout"); // callback queue , runs last 
}, 0); // 0ms means it will run after the call stack is empty

Promise.resolve().then(() => { // microtask queue runs after 
    // call stack is empty
  console.log("Promise");
});

console.log("End"); // call stack , runs second 

// output 
// Start
// End
// Promise
// Timeout






