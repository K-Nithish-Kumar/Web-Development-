/*
Write an arrow function named calculateTotal that takes two parameters price and quantity.
The function should return the total cost by multiplying the price and quantity
store the result in a variable named totalCost 
*/

let calculateTotal = (price,quantity) => {
    return price * quantity
}

let totalCost = calculateTotal(98,100);
console.log(totalCost);
