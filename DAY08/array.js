//Ways of delcaring an array in JavaScript 
//Arrays can have any type of data, including numbers, strings, objects, 
// and even other arrays.

let array = [1, 2, 3, 4, 5];
console.log(array); // Output: [1, 2, 3, 4, 5]

let array2 = new Array(6, 7, 8, 9, 10);
console.log(array2); // Output: [6, 7, 8, 9, 10]

let array3 = Array.of(11, 12, 13, 14, 15);
console.log(array3); // Output: [11, 12, 13, 14 , 15]

let array4 = Array.from(["eshaal", "mich", "maryam", "saliha"]);
console.log(array4);  //Output: ["eshaal", "mich", "maryam", "saliha"]


// Adding/Removing 

array.push(6);
console.log(array);

array.pop();
console.log(array); // Output: [1, 2, 3, 4, 5]

array.shift();
console.log(array); // Output: [2, 3, 4, 5]

array.unshift(1);
console.log(array); // Output: [1, 2, 3, 4,5]


//   Access / Slice / Combine
let sliceArray = array.slice(1, 3);
console.log(sliceArray); // Output: [2, 3]

let combinedArray = array2.concat(sliceArray);
console.log(combinedArray); // Output: [6, 7, 8, 9, 10, 2, 3]

let newArray = new Array(3);
newArray.fill(13, 0, 3);
console.log(newArray); // Output: [13, 13, 13]

array3.copyWithin(0, 2, 4);
console.log(array3); // Output: [13, 14, 13, 14, 15]

// transform and loops 
let capital = array4.map((name) => name.toUpperCase()); //merging arrow funcs with map 
console.log(capital); // Output: ["ESHAAL", "MICH", "MARYAM", "SALIHA"]

const sentence = ["hello this is a sentence"];
console.log(sentence); // Output: ["hello this is a sentence"]

const word = sentence.flatMap((word) => word.split(" "));
console.log(word); // Output: ["hello", "this", "is", "a", "sentence"]

array.forEach((element) => {
    if (element % 2 === 0) {
        console.log(element); // Output: 2, 4
    }
});

for (let index = 0; index < array.length; index++) {
    console.log(array[index]); // Output: 1, 2, 3, 4, 5

}
for (const element of array2) {
    console.log(element); // Output: 6, 7, 8, 9, 10
}

// accessing 
const filteredElements = array.filter(element => element > 3);
console.log(filteredElements); // Output: [4, 5]

const mysteryNum = filteredElements.find(element => element === 4);
console.log(mysteryNum); // Output: 4

const mysteryNumIndex = filteredElements.findIndex(element => element === 4);
console.log(mysteryNumIndex); // Output: 0

console.log(array.indexOf(3)); // Output: 2
console.log(array.includes(3)); // returns true 
console.log(array3.lastIndexOf(13)); // Output: 2  check this  [13, 14, 13, 14, 15]

const someTest = array.some(element => element > 3);
console.log(someTest); // Output: true false some elements are  not greater than 3

const everyTest = array.every(element => element > 3);
console.log(everyTest); // Output: false every element is not greater than 3

// REDUCE 

const sumofArr = array.reduce((a, c) => { return a + c; }, 0);
console.log(sumofArr); // Output: 15

// sort and reverse 

const unsortedArray = [5, 3, 8, 1, 2];
unsortedArray.sort((a, b) => a - b);
console.log(unsortedArray); // Output: [1, 2, 3, 5, 8]  
unsortedArray.reverse();
console.log(unsortedArray); // Output: [8, 5, 3, 2, 1]

// bubble sort code 

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // swap arr[j] and arr[j+1]
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
const bubbleSortedArray = bubbleSort([64, 34, 25, 12, 22, 11, 90]);
console.log(bubbleSortedArray); // Output: [11, 12, 22, 25, 34, 64, 90]



// string 
const strArray = ["html", "css"];
const joinedString = strArray.join(","); // Joining with a comma
console.log(joinedString); // Output:   "html,css"

array.toString(); // Converts the array to a string
console.log(array); // Output: "1,2,3,4,5"  