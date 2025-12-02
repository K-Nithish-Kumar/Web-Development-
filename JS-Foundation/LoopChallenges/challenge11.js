/*
use a for-in loop to loop through an object containing city population
stop the loop when the population of "Berlin" is found and store all previous cities population in a new object named 'cityPopulation'

let citiesPopulation = {
  London:8900000,
  "New York":8400000,
  Paris:2200000,
  "Berlin":3500000,
}
*/

let citiesPopulation = {
  London:8900000,
  "New York":8400000,
  Paris:2200000,
  Berlin:3500000,
}

let cityPopulation = {};

for (const city in citiesPopulation) {
    if(city === 'Berlin') {
        break;
    }

    cityPopulation[city] = citiesPopulation[city]
    
    

    
}

console.log(cityPopulation);

