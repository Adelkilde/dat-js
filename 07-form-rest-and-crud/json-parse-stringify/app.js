console.log("app.js is running 🎉");

// User as a text string
const userString = '{"name":"John", "age":30, "city":"New York"}';
// Converts the text into a JavaScript Object
const userObject = JSON.parse(userString);
console.log(userObject);

// Cars as a text string
const carsString = '["Ford", "BMW", "Audi", "Fiat", "VW"]';
// Converts the text into a JavaScript Array
const carsArray = JSON.parse(carsString);
console.log(carsArray);

// User as a JavaScript Object
const user = { name: "John", age: 30, city: "New York" };
// Converts user object to JSON string
const userJSON = JSON.stringify(user);
console.log(userJSON);

// Cars as a JavaScript Array
const cars = ["Ford", "BMW", "Audi", "Fiat", "VW"];
// Converts cars array to JSON string
const carsJSON = JSON.stringify(cars);
console.log(carsJSON);
