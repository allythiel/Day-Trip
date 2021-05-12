"use strict";

let finalTrip = [];
let destinations = [" Mexico", " Italy", " Greece", " New Zealand", " Canada"];
let restaurants = [" Kopps", " Pasta Tree", " Oakland Gyros", " Su Casa", " FreshFin"];
let transportation = [" Bus", " Taxi", " Train", " Walk", " Bike", " Boat"];
let entertainment = [" Concert", " Hiking", " Shopping", " Bike Tour", " Go Swimming"];

function randomEvent(array) {
    let randomItem = array[Math.floor(Math.random() * array.length)];
    return randomItem;
}

let myTripArr = randomArrayResults(destinations, restaurants, transportation, entertainment);

function randomArrayResults(destArr, restArr, transArr, entArr) {
    let myDestination = randomEvent(destArr);
    let myRestaurant = randomEvent(restArr);
    let myTransportation = randomEvent(transArr);
    let myEntertainment = randomEvent(entArr);
    let resultArr = [myDestination, myRestaurant, myTransportation, myEntertainment];
    return resultArr;
}

function confirmDetails(array){
    let operationComplete = false;
    while(operationComplete === false){
        let userConfirm = confirm("Press okay to confirm" + array);
        operationComplete = userConfirm;
        if (operationComplete === false) {
            let myTripArr = randomArrayResults(destinations, restaurants, transportation, entertainment);
            return myTripArr;
        }
    }
    if (operationComplete === true) {
        finalTrip.push(myTripArr);
    }
}
confirmDetails(myTripArr);


function confirmTrip(){
    let tripComplete = false;
    while (tripComplete === false){
        let userAccepted = confirm("Press OK to confirm your final trip which includes " + finalTrip);
        tripComplete = userAccepted;
    }
    if (tripComplete === true) {
        console.log(finalTrip);
    }
}
confirmTrip();
