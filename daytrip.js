"Use Strict"

let destinations = ["Mexico", "Italy", "Greece", "New Zealand", "Canada"];

function randomDestination() {
   for (let i = 0; i < destinations.length; i++) {
        randomDes = destinations[Math.floor(Math.random() * destinations.length)];
    }
    console.log(randomDes);
}

randomDestination();