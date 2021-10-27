user_info = document.getElementById('user_name');
user_btn = document.getElementById('user');

const user_data = [];

// Steps:
// 1. Create a localStorage database
// 2. Create a function to accept user inputs
// 3. Create a function to add data to the database
// 4. Create a function to display data from the database into the app

// Create a localstorage Database

const db = localStorage.setItem('user_data', JSON.stringify(users));
const users = [];

users.push('Erasmus');

console.log(users);
