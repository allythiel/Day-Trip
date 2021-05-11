"Use Strict"

let destinations = ["Mexico", "Italy", "Greece", "New Zealand", "Canada"];

function randomDestination() {
    randomDes = destinations[Math.floor(Math.random() * destinations.length)];
    return randomDes;
}

let myDestination = randomDestination();


let restaurants = ["Kopps", "Pasta Tree", "Oakland Gyros", "Su Casa", "FreshFin"];

function randomRestaurant() {
    randomRest = restaurants[Math.floor(Math.random() * restaurants.length)];
    return randomRest;
}

let myRestaurant = randomRestaurant();


let transportation = ["Bus", "Taxi", "Train", "Walk", "Bike", "Boat"];

function randomTransportation() {
    randomTrans = transportation[Math.floor(Math.random() * transportation.length)];
    return randomTrans;
}

let myTransportation = randomTransportation();


let entertainment = ["Concert", "Hiking", "Shopping", "Bike Tour", "Go Swimming"];

function randomEntertainment() {
    randomEnt = entertainment[Math.floor(Math.random() * entertainment.length)];
    return randomEnt;
}

let myEntertainment = randomEntertainment();