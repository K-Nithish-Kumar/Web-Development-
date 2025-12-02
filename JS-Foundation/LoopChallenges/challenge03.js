/*
Write a do while loop that prompts a user to enter their favourite tea type until they enter stop
store each tea type in an array named teaCollection
*/

let favouriteTea;
let teaCollection = [];

do {
    favouriteTea = prompt(`Enter your favourite tea (type "stop" to finish)`,'');

    if(favouriteTea !== "stop"){
        teaCollection.push(favouriteTea)
    }

} while(favouriteTea !== "stop")

console.log(teaCollection);
