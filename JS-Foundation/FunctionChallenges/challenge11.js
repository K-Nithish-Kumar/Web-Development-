/*
Write a function findMax(arr) that returns largest number in the array
*/

let arr = [10,26,73,28];

function findMax(arr) {
    let max = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}  // Method -1

console.log(findMax(arr));

// Method 2 

function findMax01(arr) {
    return Math.max(...arr)
}

console.log(findMax01(arr));

