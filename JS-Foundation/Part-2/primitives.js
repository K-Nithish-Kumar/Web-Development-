//Number 

let balance = 120;
let anotherBalance = new Number(130)

// console.log(balance);
// console.log(anotherBalance.valueOf());
// console.log(typeof(balance))
// console.log(typeof(anotherBalance))

//boolean 
let isActive = true;
let isReallyActive = new Boolean(true); //Not recommended



//null and undefined
let firstName = null;
let lastName = undefined;
// console.log(firstName);
// console.log(lastName);

//String 
let myString = "hello";
let myStringOne = 'Hello';
let userName = 'Nithish'

let greetMessage = `hello ${userName}`; 
let demoOne = `value is ${2 * 2}`;
// console.log(demoOne);
// console.log(greetMessage);

//Symbol
let sm1 = Symbol("Nithish");
let sm2 = Symbol("Nithish");

console.log(sm1 == sm2);


