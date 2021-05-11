"use strict";

let finalTrip = [];
let destinations = ["Mexico", "Italy", "Greece", "New Zealand", "Canada"];
let restaurants = ["Kopps", "Pasta Tree", "Oakland Gyros", "Su Casa", "FreshFin"];
let transportation = ["Bus", "Taxi", "Train", "Walk", "Bike", "Boat"];
let entertainment = ["Concert", "Hiking", "Shopping", "Bike Tour", "Go Swimming"];

function randomEvent(array) {
    let randomItem = array[Math.floor(Math.random() * array.length)];
    return randomItem;
}

let myDestination = randomEvent(destinations);
let myRestaurant = randomEvent(restaurants);
let myTransportation = randomEvent(transportation);
let myEntertainment = randomEvent(entertainment);


function confirmDetails(string){
    let operationComplete = false;

    while(operationComplete === false){
        let userConfirm = confirm("Press okay to confirm " + string);
        operationComplete = userConfirm;
    }
    if (operationComplete === true) {
        finalTrip.push(string);
    }
}

confirmDetails(myDestination);
confirmDetails(myRestaurant);
confirmDetails(myTransportation);
confirmDetails(myEntertainment);

console.log(finalTrip);