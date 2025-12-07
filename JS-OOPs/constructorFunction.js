// function greet (name) {
//     return `Hello ${name}`;
// }

// console.log(greet("Nithish")); -> Normal function


// Constructor Function 

function Greet(name) {
    this.name = name;
    return `Hello ${this.name}`;
}


let firstUser = new Greet("Nithish");

console.log(firstUser);

let secondUser = new Greet("Jeyaram");

console.log(secondUser);


function Animal(species) {
    this.species = species;

//     Animal.prototype.sound = function () {
//         return `${this.species} makes a sound`;
//     }
}

Animal.prototype.sound = function () {
    return `${this.species} makes a sound`;
}



let Dog = new Animal("Dog");
console.log(Dog.sound());
