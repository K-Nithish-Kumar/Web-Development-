/*
Write a function named 'processTeaOrder' that takes another function 'makeTea' as a parameter
and calls it with the argument "earl grey",Return the result of calling 'makeTea'
*/

function makeTea(typeOfTea) {
    return `Order is confirmed for ${typeOfTea}`
}

function processTeaOrder(makeTea) {
   return makeTea("earl grey");
}

let result = processTeaOrder(makeTea);
console.log(result);
