

window.addEventListener("load", function() {

    const form = document.querySelector('form');

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       
   }).then(function () {
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       const randomPlanet = pickPlanet(listedPlanets);
    
       addDestinationInfo(document, randomPlanet[0].name, randomPlanet[0].diameter, randomPlanet[0].star, randomPlanet[0].distance, randomPlanet[0].moons, randomPlanet[0].image);
   })

   form.addEventListener('submit', function (event) {
        event.preventDefault();
        const list = document.getElementById('faultyItems');
        const pilot = document.querySelector('input[name=pilotName]').value;
        const copilot = document.querySelector('input[name=copilotName]').value;
        const fuelLevel = document.querySelector('input[name=fuelLevel]').value;
        const cargoLevel = document.querySelector('input[name=cargoMass]').value;
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);

   });

});
