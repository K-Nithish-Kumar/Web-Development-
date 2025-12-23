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


// create a tshirt product constructor which have brand,price,color,discount

function Tshirt (brand,price,color,discount) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.discount = discount;

    this.detail = function () {
        return ` This ${this.color} color Tshirt in ${this.brand} with the price of ${this.price} available with the discount of ${this.discount}`;
    };
};

let AllenSollyTshirt = new Tshirt("Allen Solly","Rs 800","Black","20%")

console.log(AllenSollyTshirt);
console.log(AllenSollyTshirt.detail());



