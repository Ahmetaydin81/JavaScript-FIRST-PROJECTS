
function myFunction() {
    let clock = new Date;

    document.getElementById("clock").innerHTML =
        clocks(clock.getHours(), 2) + ":" +
        clocks(clock.getMinutes(), 2) + ":" +
        clocks(clock.getSeconds(), 2);
  
}
myFunction();
setInterval(myFunction, 1000);

function clocks(clock, pad) {
    return String(clock).padStart(pad, '0');
}


function date(){
    let date = new Date;

    document.getElementById("day").innerHTML =
    date.getDate()+"."+date.getMonth()+"."+date.getFullYear();
}

date()