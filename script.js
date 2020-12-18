// Write your JavaScript code here!

window.addEventListener("load",function() {

   // Validation

   // adding alerts
   // pilot name - string; copilot - string; fuel level - number; cargo mass - number

   // validate that it is not blank
  

   let form = document.querySelector("form");
   form.addEventListener("submit", function(event){
         event.preventDefault();
         let pilotNameInput = document.querySelector("input[name=pilotName]");
         let copilotNameInput = document.querySelector("input[name=copilotName]");
         let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
         let cargoMassInput = document.querySelector("input[name=cargoMass]");
         const cargoMassInputNum = Number(cargoMassInput.value);
         const fuelLevelInputNum = Number(fuelLevelInput.value);
         let displayStatus = true;
         // alert the current value found in the pilotName input
         if ( pilotNameInput.value ===""||
               copilotNameInput.value === ""||
               fuelLevelInput.value === ""||
               cargoMassInput.value === "")
         {
            alert("Please enter values into all fields of the form.")
            displayStatus = false;
         }
         else if(
            isNaN(fuelLevelInputNum)||
            isNaN(cargoMassInputNum)){
            alert("Fuel Level Input and Cargo Mass Input must be numbers.");
            displayStatus = false;
         }
         else if(!(isNaN(pilotNameInput.value)&&
                isNaN(copilotNameInput.value)))
         {
            alert("Pilot Name and Co-Pilot Name must be a string.")
            displayStatus = false;
         }

      if(displayStatus){

        // Update inner HTML of pilot and copilot list items to reflect user entered strings

         let pilotName = document.getElementById("pilotStatus");
         let copilotName = document.getElementById("copilotStatus");
    
         pilotName.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`;   
         copilotName.innerHTML = `Co-pilot ${copilotNameInput.value} is ready for launch`;     
         
         
         /*If  user submit fuel level < 10,000
            Update CSS: faultyItems: visible
            Update HTML: fuel status: insufficient fuel for journey
            Update HTML: launch status: "Shuttle not ready for launch"
            Update CSS: launch status: textcolor - red
         */
        let fuelStatus = document.getElementById("fuelStatus");
        let launchStatus = document.getElementById("launchStatus");
        let cargoStatus = document.getElementById("cargoStatus");
        document.getElementById("faultyItems").style.visibility = "visible";
        let shuttleReady = true; 

         if(fuelLevelInputNum < 10000){
            fuelStatus.innerHTML = "Fuel level too  low for launch";
            shuttleReady = false;      
         }
         
         if(cargoMassInputNum > 10000){
            cargoStatus.innerHTML = "There is too much mass for the shuttle to take off"
            shuttleReady = false;
         } 

         if(shuttleReady){
            launchStatus.innerHTML = "Suttle Ready for Launch";
            launchStatus.style.color = "green"; 
         } else if (!shuttleReady){
            launchStatus.innerHTML = "Suttle Not Ready for Launch";
            launchStatus.style.color = "red"; 
         }
      };

   });


   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){

      response.json().then(function(json){
         console.log(json);
         const div = document.getElementById("missionTarget");
         let mission = Math.floor(Math.random()*(json.length));
         div.innerHTML = `<h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[mission].name}</li>
            <li>Diameter: ${json[mission].diameter}</li>
            <li>Star: ${json[mission].star}</li>
            <li>Distance from Earth: ${json[mission].distance}</li>
            <li>Number of Moons: ${json[mission].moons}</li>
         </ol>
         <img src="${json[mission].image}">
         `
      })
   })



});

// 
/*
fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
   response.json().then(function(json){
       const astronauts = document.getElementById('astronauts');
       const count = document.getElementById('count');
       
       const div = document.getElementById("atronauts");
       div.innerHTML = `
       <div class = "bio">
       <h3>${astronaut.firstName} - ${astronaut.lastName}</h3>
           <ul> 
               <li>Hours in space: ${astronaut.hoursInSpace}</li>
               <li>Active: ${astronaut.active}</li>
               <li>Skills:${astronaut.skills.join(", ")}</li>
           </ul>
       </div>
       `
  
   });
});
});*/

/* This block of code shows how to format the HTML once you fetch some planetary JSON!

*/
