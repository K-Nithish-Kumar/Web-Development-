/*
Use a for-of loop to iterate through the array ["chai","green tea", "herbal tea", "black tea"]
and skip "herbal tea" and store the other teas in an array named "preferredTeas"
*/

let teaTypes = ["chai","green tea", "herbal tea", "black tea"];
let preferredTeas = [];

for (const tea of teaTypes) {
    
    if(tea === "herbal tea") {
        continue;
    }

    preferredTeas.push(tea)
}

console.log(preferredTeas);
