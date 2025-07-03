
console.log("1");
setTimeout(() => {
    console.log("2");
}, 0);

console.log("3"); // output 1 3 2 
// 1 and 3 are synchoronus while 2 is asynchonus 

function greet(name, callback) {
    console.log("Hello" + name);
    callback() // pushes bye func on call stack 
}
function bye() {
    console.log("Bye");
}
greet("Eshaal", bye); // passing func as variables
// Output: Hello Eshaal Bye


function washDishes(callback) {
    setTimeout(() => {
        console.log("washing..");
        callback();
    }, 1000);

}
function cleanHouse(callback) {
    setTimeout(() => {
        console.log("Cleaning..");
        callback();
    }, 1000);
}
function cookNoodles(callback) {
    setTimeout(() => {
        console.log("Cooking..");
        callback();
    }, 1000);
}
washDishes(() => {
    cleanHouse(() => {
        cookNoodles(() => {
            console.log("Chores Done");
        })
    })
})
// Output: Washing
// Cleaning
// Cooking
//Chores Done
// all after one second 
