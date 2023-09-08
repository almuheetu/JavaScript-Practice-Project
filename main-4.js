let [seconds, minutes, hours] = [0, 0, 0];
var displayTime = document.getElementById("displayTime")
var buttonStart = document.getElementById('btn-start')
var buttonStop = document.getElementById('btn-stop')
var buttonReset = document.getElementById('btn-reset')
var Interval = null;

// buttonStart.addEventListener('click', () => {
//     if (Interval !== null) {
//         clearInterval(Interval);
//     }

//     Interval = setInterval(startTime, 1000);
// });


// buttonStop.addEventListener('click', () => {
//     clearInterval(Interval);
// });

// buttonReset.addEventListener('click', () => {
//     clearInterval(Interval);
//     minutes = "00";
//     seconds = "00";
//     hours = "00";
//     OutputSeconds.innerHTML = seconds;
//     OutputMinutes.innerHTML = minutes;
//     OutputHours.innerHTML = hours;
// });

function startTime() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }


    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;


    displayTime.innerHTML = h + ":" + m + ":" + s;
}

function watchStart() {
    if (Interval !== null) {
        clearInterval(Interval);
    }

    Interval = setInterval(startTime, 1000);
}


function watchStop() {
    clearInterval(Interval);
}


function watchReset() {
    clearInterval(Interval);
    [seconds, minutes, hours] = [0, 0, 0];
    displayTime.innerHTML = "00:00:00";
}



