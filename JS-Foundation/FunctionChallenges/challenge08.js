/*
Perform the following mathematical operations using function on the provided variables a and b
let a = 10;
let b = 25;

1) Addition
2) Subtraction
3) Multiplication
4) Division
5) Remainder
6) Increment-for a
7) Decrement-for b
*/

let a = 10;
let b = 25;

function Addition() {
    const result01 = a + b;
    return result01;
}

console.log(Addition());


function Subtraction() {
    const result02 = a - b;
    return result02;
}

console.log(Subtraction());


function Multiplication() {
    const result03 = a * b;
    return result03;
}

console.log(Multiplication());


function Division() {
    const result04 = a / b;
    return result04;
}

console.log(Division());

function Remainder() {
    const result05 = a % b;
    return result05;
}

console.log(Remainder());

function Increment() {
    let result06 = a;
    result06 += 1;
    return result06;
}

console.log(Increment());

function Remainder() {
    let result07 = b;
    result07 -= 1;
    return result07;
}

console.log(Remainder());