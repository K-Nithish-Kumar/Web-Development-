/**
Write a function "stringToNumber" that takes a string input and tries to convert it to a number.
If the conversion fails,return "Not a number" 
*/

function stringToNumber(input) {
    let result = Number(input);
    if(isNaN(input)) {
        return "Not a number";
    }

    return result;
}

console.log(stringToNumber('abc'));
console.log(stringToNumber('123'));