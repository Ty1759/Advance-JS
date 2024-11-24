const fruits = ["Apple", "Orange", "Banana", "Coconut"];
console.log(fruits);

fruits.push("Cherry") //add to the fruits at the end
console.log(fruits);

fruits.unshift("Mango") // add to the array of fruits at the beginning.
console.log(fruits);

fruits.pop(); // removes the last element in the array
console.log(fruits);

fruits.shift(); // removes the first element in the array
console.log(fruits)

fruits.splice(1, 1); // this method is used to remove from a certain area in the array.
console.log(fruits)

fruits[1] = "blueberry" // this method is used to replace a string in the array
console.log(fruits)

fruits.splice(1, 0, "starwberry",  "Pineapple", "Tangerine", "Watermelon"); // removes element and if necessary add another in their place
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
    console.log( fruits[i]);
}

let singleFruit = fruits.map(fruit => console.log(fruit))

let upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperCaseFruits)

let longFruits = fruits.filter(fruits => fruits.length > 7);
console.log(longFruits)

let foundFruit = fruits.find(fruit => fruit === "Apple");
console.log(foundFruit)

let hasBanana = fruits.includes("Banana");
console.log(hasBanana)

let hasWatermelon = fruits.includes("Watermelon");
console.log(hasWatermelon)



//ASSIGNMENT.
//concat method is used in various programming languages to combine two or more strings, arrays or sequences into one.
//Examples below shows combination of two or more strings and also that of array method.
let string1 = "The Best";
let string2 = " Photographer Ever";
result = string1.concat(string2);
console.log(result); Output: "The Best Photographer Ever"

//Example 2. Array
let array1 = ["Gold, Silver, Bronze"];
let array2 = ["Diamond, Pearl"];
result = array1.concat(array2);
console.log(result);   Output: ["Gold, Silver, Bronze, Diamond, Pearl"]


//Sort Method
// this method is used in sorting elements in a list on an array. it arranges the elements in ascending or descending order.
//Example below
Nos = [3, 0, 4, 1, 5, 9, 2, 6]
Nos.sort()  //Sorts in ascending order
console.log(Nos)

Noor = [1, 3, 5, 6, 8, 9, 4, 7]
Noor.sort = (reverse = true); // sorts in descending order
console.log(Noor)

//Assignment 3
 // using mapping() method create an array of objects and display each item in the console
const userInfo = [
    {name:"Amorim", location: "Manchester", work: "Football coach", gender: "Male"} // an array of objects
];
userInfo.map(userInfo => console.log( "name:",userInfo.name,  "location:",userInfo.location, "work:", userInfo.work,"gender:", userInfo.gender)); 
