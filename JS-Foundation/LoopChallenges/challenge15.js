/*
Write a for loop that iterates through the array [2,5,7,9]
skip the value 7 and multiply the rest by 2 store the result in a new array named doubledNumbers
*/

let num = [2,5,7,9];
let doubledNumbers = [];
for(let i = 0; i < num.length; i++) {
    if(num[i] === 7) {
        continue;
    }
    doubledNumbers.push(num[i]*2);
}