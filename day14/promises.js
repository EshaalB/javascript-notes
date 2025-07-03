// function washDishes() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("washing..");
//             resolve();
//         }, 1000);
//     })
// }
// function cleanHouse() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("cleaning..");
//             resolve();
//         }, 1000);
//     })
// }
// function cookNoodles() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("cooking..");
//             resolve()
//         }, 1000)
//     })
// }
// washDishes()
//     .then(cleanHouse)
//     .then(cookNoodles)
//     .then(() => {
//         console.log("Chores Done");
//     })
//     .finally(() => {
//         console.log("Clear");
//     });
// //     washing..
// // cleaning..
// // cooking..
// // Chores Done
// // Clear
function traffic() {
    return new Promise((resolve, reject) => {
        let isRed = false
        setTimeout(() => {
            if (!isRed) {
                resolve("Continue Driving")
            }
            else {
                reject("Stop")
            }
        }, 2000);
    })
}
traffic().then((message) => {
    console.log("Success", message); // we get Success Continue Driving 

}).catch((error) => {
    console.log("Error:", error);

})

function boilWater() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Water boiled");
            resolve();
        }, 1000);
    });
}
function addTeaLeaves() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Tea leaves added");
            resolve();
        }, 1000);
    });
}

function addSugar() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Sugar added");
            resolve();
        }, 1000);
    });
}

async function makeChai() {
    await boilWater();
    await addTeaLeaves();
    await addSugar();
    console.log("Chai is ready!");
}

makeChai();
// Water Boiled
// Tea Leaves added
// sugar added
// chai is ready all after one second 

//Callbacks, Promises, and Async/Await are ways to handle asynchronous operations in JavaScript, allowing code to wait for tasks to complete without blocking the rest of the program.



// IIFE (Immediately Invoked Function Expression)?
//It is a function that runs immediately after it's defined.

(function () {
    console.log("Hello"); //runs immediately before 
})() //declared and defined at the same time
//module pattern
// can be used as init code 