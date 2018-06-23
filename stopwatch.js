var centi_seconds = 0;
var seconds       = 0;
var minutes       = 0;
var running       = 1;
var interval;

function stopwatch_start() {

    running++;

    if(running === 2) {

    interval = setInterval(function(){

    // code to remove string zeros for number-based conditionals 

    minutes = parseInt(minutes);
    seconds = parseInt(seconds);

    // code to increase the count of seconds and minutes

    seconds = centi_seconds > 99 ? seconds + 1 : seconds;
    minutes = seconds > 59 ? minutes + 1 : minutes;
    
    // code to format the displayed numbers

    centi_seconds = centi_seconds < 10 ? "0" + centi_seconds : centi_seconds;
    centi_seconds = centi_seconds > 99 ? "0" + 0 : centi_seconds;

    seconds = seconds < 10 ? "0" + seconds : seconds;
    seconds = seconds > 59 ? "0" + 0 : seconds;

    minutes = minutes < 10 ? "0" + minutes : minutes;

    document.getElementById("watch_display").innerHTML = minutes + ":" + seconds + ":" + centi_seconds;
    centi_seconds++;},10);
    }

}

function stopwatch_stop() {

    clearInterval(interval);
    running = 1;

}

function reset() {

    var watch_display = document.getElementById("watch_display");
    watch_display.innerHTML = "00:00:00";

    return centi_seconds = 0, seconds = 0, minutes = 0;

}

function split() {

    var split_time = document.getElementById("watch_display").textContent;
    var ul         = document.getElementById("splits");
    var li         = document.createElement("li");
    
    li.appendChild(document.createTextNode(split_time));
    ul.appendChild(li);

}