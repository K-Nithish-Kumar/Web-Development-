/* 
You have an array named "popularTea" containing "green tea","ooling tea" and "chai".
Create a soft copy of this array named "softCopyTeas"
*/

let popularTea = ["green tea","ooling tea","chai"]
let softCopyTeas = popularTea;
console.log(softCopyTeas);
console.log(popularTea);
popularTea.pop(); // Changes you made in popularTea will reflects to the softCopy array
console.log(softCopyTeas);
console.log(popularTea);

