"use strict";

let finalTrip = [];
let destinations = ["Mexico", "Italy", "Greece", "New Zealand", "Canada"];
let restaurants = ["Kopps", "Pasta Tree", "Oakland Gyros", "Su Casa", "FreshFin"];
let transportation = ["Bus", "Taxi", "Train", "Walk", "Bike", "Boat"];
let entertainment = ["Concert", "Hiking", "Shopping", "Bike Tour", "Go Swimming"];

function randomEvent(array) {
    randomItem = array[Math.floor(Math.random() * array.length)];
    return randomItem;
}

let myDestination = randomDestination(array);
let myRestaurant = randomRestaurant(array);
let myTransportation = randomTransportation(array);
let myEntertainment = randomEntertainment(array);