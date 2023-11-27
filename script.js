"use strict"

// const  clientAge = prompt("How old are you?", "17");
// const clientPlace = prompt("Where are you?", "Tashkent");
// const clientName = prompt("What's your name?", "Shaha");
// const  clientAge2 = prompt("How old are you? #2", "17");
// const clientPlace2 = prompt("Where are you? #2", "Tashkent");
// const clientName2 = prompt("What's your name? #2", "Shaha");
//
// let arraySource = [
//     {
//         age: `${clientAge}`,
//         place: `${clientPlace}`,
//         name: `${clientName}`,
//         fullBio: `${clientName}+${clientAge}+${clientPlace}`
//     },
//     {
//         age: `${clientAge2}`,
//         place: `${clientPlace2}`,
//         name: `${clientName2}`,
//         fullBio: `${clientName2} ${clientAge2} ${clientPlace2}`
//     }
// ]
//
// console.log(arraySource)
//
// let h1 = document.getElementsByTagName('h1')
//
// h1.innerHTML = ""


// const question = prompt("Write any number", "");
// const answer = 30;
//
// if (question == answer){
//     alert("That's equal")
// } else if (question > answer){
//     alert("your number bigger than")
// } else if (question < answer){
//     alert("Your number little than")
// }

const personalMovie ={
    count: "",
    movies: {

    }
}

const sorov = prompt("Nechta kino ko'rgansiz", "");

console.log(personalMovie.count+`${sorov}`);

const sorov1 = prompt('Oxirgi kino nomi', '');
const sorov2 = prompt('Nechi baxo qoyasiz', '');
const sorov3 = prompt('Oxirig kino nomi #2', '');
const sorov4 = prompt('Nechi baxo qoyasiz #2', '');

console.log(personalMovie.movies+`${sorov1}`);
console.log(personalMovie.movies+`${sorov2}`);
console.log(personalMovie.movies+`${sorov3}`);
console.log(personalMovie.movies+`${sorov4}`);