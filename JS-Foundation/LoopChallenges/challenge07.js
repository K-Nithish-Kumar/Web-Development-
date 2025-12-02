/*
Write a for loop that loop through the array ["green tea","black tea","chai","oolong tea"]
and stops the loop when it finds "chai" and store all teas before chai in a new array named "selectedTeas"
*/

let teas = ["green tea","black tea","chai","oolong tea"];
let selectedTeas = [];

for (let i = 0; i < teas.length; i++) {

    if(teas[i] === "chai"){
        break;
    };

    selectedTeas.push(teas[i]);
};

console.log(selectedTeas);
