let university = {
    name:"ABC University"
}

let myInformation = {
    name:'Nithish kumar k',
    age:20,
    Degree:'B.E CSE',
    // __proto__:university, 1 method of setting prototype
}




Object.setPrototypeOf(myInformation,university) // another method for setting prototype

console.log(`My University`, Object.getPrototypeOf(myInformation));

let genericCar = {
    tyres:4,
}


let genericCar01 = {
    engine:"bs6",
}  


let genericCar02 = {
    "Tank-Capacity":"25 litres",
}


let tesla = {
    driver: "AI"
}

Object.setPrototypeOf(genericCar,genericCar01);
Object.setPrototypeOf(tesla,genericCar);
// Object.setPrototypeOf(tesla,genericCar02);


// console.log(`Tesla`,tesla);
// console.log(`Tesla`,genericCar);
console.log(`Tesla`, Object.getPrototypeOf(tesla));
console.log(`genericCar`, Object.getPrototypeOf(genericCar));



