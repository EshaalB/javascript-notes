const jsonData = '{"name":"eshaal" , "age":20}'; // use single quotes outside 
//use double quotes around property names 
const objData = JSON.parse(jsonData);  // JSON to Object
console.log(objData.name); //eshaal
console.log(objData.age); // 20

const revertJson = JSON.stringify(objData); // Object to JSON
console.log(revertJson); //{"name":"eshaal","age":20}

// ARR JSON
const jsonArr = '["HTML", "CSS", "JS"]';
const arr = JSON.parse(jsonArr);
console.log(arr); //[ 'HTML', 'CSS', 'JS' ]

//NESTED JSON
const nestedJSON =
    '{"user":{"name":"Areeba","address":{"city":"Lahore","zip":54000}}}';
const userObj = JSON.parse(nestedJSON);
console.log(userObj.user.address.city); // Lahore


//Stringify parameter 
const filterJSON = JSON.stringify(objData, ['age'], 2);
// age is the replace parameter for filter
// 2 is the space parameter for indent 
console.log(filterJSON);
// {
//   "age": 20
// }