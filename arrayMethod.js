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