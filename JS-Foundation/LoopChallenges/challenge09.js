/*
Use a for-of loop to iterate through the array [1,2,3,4,5] and stop when the number is 4 is found and store the numbers before 4 in an array named 
smallNumbers
*/

let numbers = [1,2,3,4,5];
let smallNumbers = [];

for (const number of numbers) {
    if(number === 4) {
        break
    }

    smallNumbers.push(number);
}

console.log(smallNumbers);
