/*
Write a function filterNumbers(arr) that returns only numbers from a mixed array
*/

let arr = ['Hello',1,'Nithish',2,3,'kumar'];


function filterNumbers(arr) {
    return arr.filter(num => typeof(num) === 'number');
}

console.log(filterNumbers(arr));
