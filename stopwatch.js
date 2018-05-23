var seconds = 01;

function myCounter() {
    document.getElementById("watch_display").innerHTML = seconds < 10 ? "0" + seconds : seconds;
    seconds++;
}