"Use Strict"

let destinations = ["Mexico", "Italy", "Greece", "New Zealand", "Canada"];

function randomDestination() {
   for (let i = 0; i < destinations.length; i++) {
        randomDes = destinations[Math.floor(Math.random() * destinations.length)];
    }
    console.log(randomDes);
}

randomDestination();


let restaurants = ["Kopps", "Pasta Tree", "Oakland Gyros", "Su Casa", "FreshFin"];

function randomRestaurant() {
    for (let i = 0; i < restaurants.length; i++) {
        randomRest = restaurants[Math.floor(Math.random() * restaurants.length)];
    }
    console.log(randomRest);
}

randomRestaurant();


let transportation = ["Bus", "Taxi", "Train", "Walk", "Bike", "Boat"];

function randomTransportation() {
    for (let i = 0; i < transportation.length; i++) {
        randomTrans = transportation[Math.floor(Math.random() * transportation.length)];
    }
    console.log(randomTrans);
}

randomTransportation();


let entertainment = ["Concert", "Hiking", "Shopping", "Bike Tour", "Go Swimming"];

function randomEntertainment() {
    for (let i = 0; i < entertainment.length; i++) {
        randomEnt = entertainment[Math.floor(Math.random() * entertainment.length)];
    }
    console.log(randomEnt);
}

randomEntertainment();