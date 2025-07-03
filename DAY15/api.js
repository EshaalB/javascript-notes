// Working with APIS

// 1. Fetch (built in)
async function getData() {
    try {
        const response = await fetch('https://api.example.com/data'); // the link is endpoint
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json(); // if successful 
        // it gives the data u fetched
        console.log(data);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

//2. XMLHTTP (OLD WAY)
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
xhr.onload = () => {
    const data = JSON.parse(xhr.responseText);
    console.log("XHR:");
    data.forEach(user => console.log(user.name));
};
xhr.send();

//3 AXIOS - npm install axios
const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
        console.log("Axios:");
        res.data.forEach(user => console.log(user.name));
    })
    .catch(err => console.error("Axios error:", err));

