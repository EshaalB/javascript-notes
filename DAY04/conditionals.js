// simple if statement 
let age = 18
if (age >= 18)
    console.log("Age is ", age); //Age is 18

let num = 0
if (num)
    console.log("True"); //it will not print this because
// num =0 meaning its false 

let name = "Eshaal"
if (name === "Eshaal") {
    console.log("Yes"); //Yes

}

// if else statement 

let boolVal = false
if (boolVal)
    console.log("True");
else {
    console.log("False");

} //prints false 

if (age >= 18)
    console.log("Elligible for ID Card"); //this will be printed

else {
    console.log("Not Elligible for ID Card");

}

// nested if else 

let marks = 50 //prints D 

if (marks >= 90) {
    console.log('A+');

}
else if (marks >= 80) {
    console.log('A');

} else if (marks >= 70) {
    console.log('B');

}
else if (marks >= 60) {
    console.log('C');

}
else if (marks >= 50) {
    console.log('D');

}
else {
    console.log('F');

}

if (age >= 18) {
    if (name === "Eshaal")
        console.table({ name, age }); //prints in tabular form

}

// switch statement 

let option = 3
switch (option) {
    case 1:
        console.log("Start game");


        break;
    case 2:
        console.log("Pause Game");
        break;
    case 3:
        console.log("Settings");
        break;

    default:
        console.log("End Game");
        break;
    //Ans will be Settings
}

// ternary operator 
let check = age >= 18 ? "Adult" : "Minor";
console.log(check); // Adult

let boolCheck = 1 ? "True" : "False"
console.log(boolCheck); //True

// Using logical operators with if 

let num1 = 5
let num2 = 13

//AND 
if (num1 > 3 && num2 < 14)
    console.log("This is true");//this will be printed
else {
    console.log("This is true");
}

//False example
if (num1 > 5 && num2 < 14)
    console.log("This is true");
else {
    console.log("This is false");//this will be printed
}

// OR 
if (num1 > 5 || num2 < 14)
    console.log("This is true"); //this will be printed
else {
    console.log("This is false");
}
//Not equal to 
if (num1 !== 5) {
    console.log("This is true");
}
else {
    console.log("This is false");//this will be printed
}