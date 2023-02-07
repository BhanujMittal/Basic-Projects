let stopwatch = document.getElementById('stopwatch');
let startButton = document.getElementById('start-btn')
let timeoutId = null;
let ms = 0
let s = 0
let m = 0

function start(flag) {
    if(flag) {
        startButton.disaled = true;
    }

    timeoutId = setTimeout(function() {
        ms = parseInt(ms)
        s = parseInt(s)
        m = parseInt(m)
        ms++;

        if(ms == 100) {
            s = s + 1;
            ms = 0
        }

        if(s == 60) {
            m = m + 1;
            s = 0;
        }

        if (ms < 10) {
            ms = '0' + ms;
        }
        if (s < 10) {
            s = '0' + s;
        }
        if (m < 10) {
            m = '0' + m;
        }

        stopwatch.innerHTML = `${m} : ${s} : ${ms}`;
        start()
    }, 10)
}

/* function to pause stopwatch */
function pause() {
    clearTimeout(timeoutId);
    startBtn.disabled = false;
}
 
/* function to reset stopwatch */
function reset() {
    ms = 0;
    sec = 0;
    min = 0;
    clearTimeout(timeoutId);
    stopwatch.innerHTML = '00:00:00';
    startButton.disabled = false;
}