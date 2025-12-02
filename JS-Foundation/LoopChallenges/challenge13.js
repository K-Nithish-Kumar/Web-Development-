/**
write a forEach loop that iterates through the array["earl grey","green tea","chai","oolong tea"]
stop the loop when "chai" is found, and store all previous tea types in an array named 'availableTeas'
*/

let array = ["earl grey","green tea","chai","oolong tea"];
let availableTeas = [];

array.forEach((tea) => {
    if(tea === "chai") {
        return;
    }
    availableTeas.push(tea)
})

console.log(availableTeas);
