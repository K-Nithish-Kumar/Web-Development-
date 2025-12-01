/* 
you have an array named "topCities" containing "Berlin","Singapore",and "New York".
Create a hard copy of this array named "hardCopyCities"
*/

let topCities = ["Berlin","Singapore","New York"];
let hardCopyCities = [...topCities];
console.log(hardCopyCities);
console.log(topCities);

topCities.pop(); //changes you made in original array not reflected in any other copied array

console.log(hardCopyCities);
console.log(topCities);


