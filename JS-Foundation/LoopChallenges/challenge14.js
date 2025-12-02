/*
Write a forEach loop that iterates through the array ["Berlin","Tokyo","Sydney","Paris"]
skip "Sydney" and store the other cities in a new array named "traveledCites"
*/

let array = ["Berlin","Tokyo","Sydney","Paris"];
let traveledCites = [];

array.forEach((city) => {
    if(city === "Sydney") {
        return;
    }
    traveledCites.push(city)
})

console.log(traveledCites);