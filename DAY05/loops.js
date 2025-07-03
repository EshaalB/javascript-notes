
// // FOR LOOP
// let num = 3
// for (let index = 0; index < num; index++) {
//     console.log(num); // 3 3 3
// }

// for (let index = 0; index < num; index++) {
//     console.log(index); // 0 1 2
// }

// for (let index = 1; index <= num; index++) {
//     console.log(index); // 1 2 3
// }


// for (let index = num; index >= 1; index--) {
//     console.log(index); // 3 2 1
// }

// for (let index = num; index >= 1; index--) {
//     process.stdout.write("*") // ***
// } //using this line we can check output without new line


// for (let index = 1; ; index++) {
//     console.log(index); //  infinite loop
// }

// WHILE LOOP 
// let num = 5
// while (num > 0) {
//     console.log(num); // 5 4 3 2 1 
//     num--

// }
// let i = 0
// while (i < 5) {
//     console.log(i); // 0 1 2 3 4 
//     i++

// }
// let boolstate = true;

// while (boolstate) {
//     console.log("Turning it into false ");
//     boolstate = false;


// }

//Do WHILE LOOP - very less used among developers 

// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 3);

// let option;

// do {
//     option = 4;

//     switch (option) {
//         case 1:
//             console.log("Starting game...");
//             break;
//         case 2:
//             console.log("Pausing game...");
//             break;
//         case 3:
//             console.log("Opening settings...");
//             break;
//         case 4:
//             console.log("Exiting game. Goodbye!");
//             break;
//         default:
//             console.log("Invalid option. Please choose between 1 and 4.");
//             break;
//     }

// } while (option !== 4); // you can enter ur own input to test this infinitely 
// for browser u can easily use prompt command for this but for node js we will discuss
// later about the technicals ways you can achieve it 

// Break and continue 
// let check = true;
// for (let i = 0; i < 3; i++) {
//     if (check)
//         break; // this exits the loop without printing any
//     //new value
//     console.log(i);
// }

// for (let i = 0; i < 3; i++) {
//     if (i === 2)
//         continue; // this skips 2 and prints 0 1 
//     console.log(i);

// }

//NESTED LOOPs: it is basically using two loops to print results
// you can use it in a matrix sense as well 

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log("j=", j, "i=", i);

    }
    console.log("i=", i);

}
// output will be something like this 
// j= 0 i= 0
// j= 1 i= 0
// j= 2 i= 0
// i= 0
// j= 0 i= 1
// j= 1 i= 1
// j= 2 i= 1
// i= 1
// j= 0 i= 2
// j= 1 i= 2
// j= 2 i= 2
// i= 2

//Pattern
const rows = 3;

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < rows + i; j++) {
        if (j < rows - i - 1) {
            process.stdout.write(" ");
        } else {
            process.stdout.write("*");
        }
    }
    console.log();
    //ANS IS   *
    //            ***
    //           *****
}
//Question 
let num = 3;
let count = 1;

for (let i = 0; i < num; i++) {
    for (let j = 0; j <= i; j++) {
        process.stdout.write(count + " ");
        count++;
    }
    console.log();
} // comment the output below 