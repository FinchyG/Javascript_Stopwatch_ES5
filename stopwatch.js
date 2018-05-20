var stopwatch = setInterval(function(){seconds_counter()}, 1000);
var seconds = 0;

function seconds_counter(seonds) {
    document.getElementById("stopwatch").innerHTML = seconds;
    seconds += 1;
}

function stop() {
    clearInterval(stopwatch);
}