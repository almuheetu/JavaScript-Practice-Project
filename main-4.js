var seconds = 00;
var tens = 00;
var OutputSeconds = document.getElementById('second')
var OutputTens = document.getElementById('tens')
var buttonStart = document.getElementById('btn-start')
var buttonStop = document.getElementById('btn-stop')
var buttonReset = document.getElementById('btn-reset')

buttonStart.addEventListener('click', () => {
    clearInterval(Interval);
    Interval = setInterval(startTime, 10);
});