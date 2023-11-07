window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json")
    .then(function(response) {
        response.json()
        .then(function(json){
            for (let item in json) {
                let astronaut = json[item];
                document.getElementById("container").innerHTML += 
                `
                <div class="astronaut">
                <div class="bio">
                <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                <ul>
                <li>Hours in Space: ${astronaut.hoursInSpace}</li>
                <li>Active: ${astronaut.active}</li>
                <li>Skills: ${astronaut.skills.map((item) => item = " " + item)}</li>
                </ul>
                </div>
                <img class="avatar" src=${astronaut.picture}>
                </div>
                `
            }
        })
    })
});

