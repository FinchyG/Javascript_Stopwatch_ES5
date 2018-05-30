var centi_seconds = 0;
var seconds       = 0;
var minutes       = 0;
var interval;

function stopwatch_start() {

    interval = setInterval(function(){

    minutes = parseInt(minutes);
    seconds = parseInt(seconds);

    seconds = centi_seconds > 99 ? seconds + 1 : seconds;
    minutes = seconds > 59 ? minutes + 1 : minutes;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    seconds = seconds < 10 ? "0" + seconds : seconds;
    seconds = seconds > 59 ? "0" + 0 : seconds;

    centi_seconds = centi_seconds < 10 ? "0" + centi_seconds : centi_seconds;
    centi_seconds = centi_seconds > 99 ? "0" + 0 : centi_seconds;

    document.getElementById("watch_display").innerHTML = minutes + ":" + seconds + ":" + centi_seconds;
    centi_seconds++;},10);

}

function stopwatch_stop() {

    clearInterval(interval);

}

function reset() {

    location.reload();

}

function split() {

    var split_time = document.getElementById("watch_display").textContent;
    var ul         = document.getElementById("splits");
    var li         = document.createElement("li");
    
    li.appendChild(document.createTextNode(split_time));
    ul.appendChild(li);

}