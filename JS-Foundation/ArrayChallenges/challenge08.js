/* 
you have two arrays: "europeanCities" containing "Paris","Rome" and "asianCities" containing "Tokyo" and "Bangkok".
Merge these two arrays into new array named "worldCities"
*/

let europeanCities = ["Paris","Rome","asianCities"];
let asianCities = ["Tokyo","Bangkok"];

let worldCities = europeanCities.concat(asianCities);

console.log(worldCities);
