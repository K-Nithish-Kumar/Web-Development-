//object

const userName = {
    firstname: "Nithish",
    isLoggedin: true,
    "About You": "Myself Nithish Kumar"
};

userName.firstname = "K Nithish";
userName.lastname = "Kumar";

// console.log(userName.firstname);
// // console.log(userName.About You);// it gives an error in this case we wrap it up inside a square brackets and accessing it
// console.log(userName["About You"]);
// console.log(userName.lastname);
// console.log(userName);
// console.log(typeof userName);

let today = new Date();
// console.log(today.getDate());

//Array - Collection of datas

let userOne = ["Nithish",true,13_04_2006,345.36] // different types of datas are allowed in one single array and we can add another array inside an array
// console.log(userOne[0]);


//type conversion

let isValue = true;
// console.log(isValue + 1); // 2
// console.log(Number(isValue) + 1); // 2
// console.log(String(isValue) + 1); //true1

let value = "2abc";
// console.log(value); // 2abc
// console.log(Number(value)); //NAN - Not a Number
// console.log(Number(null)); //0
// console.log(typeof Number(null)); // number
// console.log(Number(undefined)); // NAN
// console.log(typeof Number(undefined)); // number
// console.log(typeof String(undefined)); // string
// console.log(String(undefined)); // undefined
// console.log(Boolean(null)); // false
// console.log(typeof Boolean(null)); // false
// console.log( Boolean(undefined)); // false
console.log(typeof Boolean(undefined)); // boolean
 









