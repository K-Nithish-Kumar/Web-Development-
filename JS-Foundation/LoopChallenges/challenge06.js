/*
Write a for loop that lists all the cities in the array ["Paris","New York", "Tokyo", "London"] and stores each city in a new array named cityList
*/

let cityList = [];
let array = ["Paris","New York", "Tokyo", "London"];

for (let i = 0; i < array.length; i++) {
    cityList.push(array[i]);
}

console.log(cityList);
