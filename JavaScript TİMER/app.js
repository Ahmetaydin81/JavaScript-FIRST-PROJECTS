
let [seconds, minutes, hours] = [0, 0, 0]
let timerContainer = document.getElementById("timer-display");
let timer = null;

function startTimer() {
    if (timer !== null) 
    {
        clearInterval(timer);
    }
    timer = setInterval(timerStop,10);

}


function resetTimer() {
    clearInterval(timer);
    [seconds, minutes, hours] = [0,0,0]
    timerContainer.innerHTML = "00:00:00"
}

function stopTimer() {
    clearInterval(timer);
}

function timerStop() {

    seconds++;
    if (seconds == 99) {
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



    timerContainer.innerHTML = h + ":" + m + ":" + s;
}

