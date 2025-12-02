/*
use a for-in loop to loop through an object containing city population
skip any city with the population below 3 million and  store the rest in a neew object named largeCities'

let citiesPopulation = {
  Sydney:5000000,
  Tokyo:9000000,
  Berlin:3500000,
  Paris:2200000,
  
}
*/

let citiesPopulation = {
  Sydney:5000000,
  Tokyo:9000000,
  Berlin:3500000,
  Paris:2200000, 
}

let largeCities = {};

for (const city in citiesPopulation) {

    if(citiesPopulation[city] < 3000000){
        continue;
    }

    largeCities[city] = citiesPopulation[city];
}

console.log(largeCities);
