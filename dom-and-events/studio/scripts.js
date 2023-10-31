window.addEventListener("load", function() {
    const takeOff = document.getElementById('takeoff');
    const flightStatus = document.getElementById('flightStatus');
    const shuttleBackground = document.getElementById('shuttleBackground');
    const spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
    const landing = document.getElementById('landing');
    const missionAbort = document.getElementById('missionAbort');


    
    takeOff.addEventListener('click', event => {
        let response = window.confirm('Confirm that the shuttle is ready for takeoff.')
        if (response) {
            flightStatus.innerHTML = 'Shuttle in flight.'
            shuttleBackground.style.backgroundColor = 'blue'
            spaceShuttleHeight.innerHTML = '10,000'
        }
    })

    landing.addEventListener('click', event => {
        let response = window.confirm('The shuttle is landing. Landing gear engaged.')
        if (response) {
            flightStatus.innerHTML = 'The shuttle has landed.'
            shuttleBackground.style.backgroundColor = 'green';
            spaceShuttleHeight.innerHTML = '0'
        }
    })

    missionAbort.addEventListener('click', event => {
        let response = window.confirm('Confirm that you want to abort the mission.')
        if (response) {
            flightStatus.innerHTML = "Mission Aborted."
            shuttleBackground.style.backgroundColor = 'green'
            spaceShuttleHeight.innerHTML = '0'
        }
    })



})
/*When the “Abort Mission” button is clicked, the following should happen:

A window confirm should let the user know “Confirm that you want to abort the mission.” If the user wants to abort the mission, then add parts b-d.
The flight status should change to “Mission aborted.”
The background color of the shuttle flight screen should change from blue to green.
The shuttle height should go to 0. */