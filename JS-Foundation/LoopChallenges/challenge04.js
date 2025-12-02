/*
Write a do while loop that adds number from 1 to 3 and stores the result in a variable named total
 */

let n = 1;
let total = 0;


do {
    total = total + n;
    n++;
} while (n < 4);

console.log(total);
