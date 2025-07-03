const user = {
    name: "Eshaal",
    age: 20,
    isAdmin: true,
    skills: ["JavaScript", "CSS", "HTML"],
    address: {  //You can also have nested objects 
        city: "LHR",
        country: "Pakistan"
    }
}
// Accessing object properties
console.log(user.name); // Eshaal   
console.log(user["age"]); // 20
console.log(user.isAdmin); // true
console.log(user.skills); // JavaScript CSS,HTML
console.log(user.address.city); // LHR
console.log(user.address["country"]); // Pakistan // You can also access nested properties using bracket notation


// Adding new properties
user.email = "mail"; // Adding a new property
console.log(user.email); // "" (empty string)

// complete object display 
console.log(user); // { name: 'Eshaal', age: 20, isAdmin: true, skills: [ 'JavaScript', 'CSS', 'HTML' ]
// , address: { city: 'LHR', country: 'Pakistan' }, email: '' }

// Modifying existing properties 
user.age = 19;
console.log(user.age); // 19
user.skills.push("React"); // Adding a new skill
console.log(user.skills); // [ 'JavaScript', 'CSS', 'HTML', 'React]

// Deleting properties
delete user.isAdmin; // Deleting a property
console.log(user.isAdmin); // undefined (property no longer exists)

// Checking if a property exists
console.log("name" in user); // true
console.log("isAdmin" in user); // false (property was deleted)
console.log(user.hasOwnProperty("email")); // true

// Iterating over object properties
for (let key in user) {
    if (
        typeof user[key] === "object" &&
        user[key] !== null &&
        !Array.isArray(user[key]) // Check if it's an object and not null or array
    ) {
        console.log(key + ":");
        for (let subKey in user[key]) {
            console.log(subKey + ": " + user[key][subKey]);
        }
    } else {
        console.log(key + ": " + user[key]);
    }
}
// Output:
// name: Eshaal
// age: 19
// skills: JavaScript,CSS,HTML,React
// address:
//   city: LHR
//   country: Pakistan
// email: mail


// OBJECT METHODS 

console.log(Object.keys(user)); // ['name', 'age', 'skills',
//  'address', 'email'] (returns an array of property names)
console.log(Object.values(user)); // ['Eshaal', 19, ] (returns an array of property values)
console.log(Object.entries(user)); // [['name', 'Eshaal'] (returns an array of key-value pairs)

console.log(Object.entries(user).length); // 5 (returns the number of properties in the object)
console.log(Object.hasOwn(user, "name")); // true (checks if the object has a specific property)

// CLONING AND MERGING OBJECTS

const clonedUser = { ...user }; // Creates a shallow copy of user
console.log(clonedUser); // output: user object 

const additionalInfo = {
    hobbies: ["reading", "gaming"],
    isActive: true
};
const mergedUser = { ...user, ...additionalInfo }; // Merges user with additionalInfo
console.log(mergedUser); // output: merged user object with additionalInfo properties 

//FREEZING AND SEALING OBJECTS

Object.freeze(user); // Prevents any changes to the user object
// user.name = "New Name"; // This will throw an error in
//  strict mode or silently fail in non-strict mode
Object.seal(user); // Prevents adding or removing properties, b
// ut allows modification of existing properties
user.age = 21; // This will work
console.log(user.age); // 21
// user.newProperty = "test"; // This will throw an error in strict mode or silently

Object.defineProperty(user, "newProperty", {
    value: "test",
    writable: false, // Prevents modification
    enumerable: true, // Allows property to be listed in for...in loop
    configurable: false // Prevents deletion or reconfiguration of the property
});
console.log(user.newProperty); // test   
// user.newProperty = "new value"; //
// This will throw an error in strict mode or silently fail in non-strict mode
