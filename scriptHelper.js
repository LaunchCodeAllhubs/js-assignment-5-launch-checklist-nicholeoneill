// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
    
   const missionTarget = document.getElementById('missionTarget');
   missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`
   
}

function validateInput(testInput) {
        if(testInput === "") {
            return "Empty";
        } else if(isNaN(testInput)) {
            return "Not a number";
        } else if(!isNaN(testInput)) {
            return "Is a number";
        }
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    const pilotStatus = document.getElementById('pilotStatus');
    const copilotStatus = document.getElementById('copilotStatus');
    const fuelStatus = document.getElementById('fuelStatus');
    const cargoStatus = document.getElementById('cargoStatus');
    const launchStatus = document.getElementById('launchStatus');

    if(validateInput(pilot) === 'Empty' || validateInput(copilot) === 'Empty' || validateInput(fuelLevel) === 'Empty' || validateInput(cargoLevel) === 'Empty') {
        alert("All fields are required");
    } else if (validateInput(pilot) === 'Is a number' || validateInput(copilot) === 'Is a number' || validateInput(fuelLevel) === 'Not a number' || validateInput(cargoLevel) === 'Not a number') {
        alert("Please enter valid data types");
    } else {
        list.style.visibility = 'visible';
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch.`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch.`;
    } if(fuelLevel < 10000) {
        list.style.visibility = 'visible';
        fuelStatus.innerHTML = "Fuel level too low for launch.";
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "red";
    } if (cargoLevel > 10000) {
        list.style.visibility = 'visible';
        cargoStatus.innerHTML = "Cargo mass too high for launch."
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "rgb(199, 37, 78)";
    } else {
        launchStatus.style.color = "rgb(65, 159, 106)";
        launchStatus.innerHTML = "Shuttle is ready for launch";
    }


}


async function myFetch() {

    let planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        return response.json();
    });

    return planetsReturned;
}


function pickPlanet(planets) {
    let randomPlanet = [];
    let index = Math.floor(Math.random() * (planets.length + 1));
    randomPlanet.push(planets[index]);
    return randomPlanet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
