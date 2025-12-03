/*
Write a function named "makeTea" that takes one parameter, "typeOfTea", and return a string
like "Making green tea" store the result in a variable named "teaOrder"
*/

function makeTea(typeOfTea) {
    return `Making ${typeOfTea}`;
}

let teaOrder = makeTea("green tea");

console.log(teaOrder);
