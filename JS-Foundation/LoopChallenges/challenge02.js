/* 
Write a while loop that counts down from 5 to 1 and stores the numbers in an array named countdown
*/

let countDown = [];
let i = 5;

while(i >= 1) {
    countDown.push(i);
    i--;
}

console.log(countDown);