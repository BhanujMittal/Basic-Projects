let stopwatch = document.getElementById('stopwatch');
let startButton = document.getElementById('start-btn')
let timeoutId = null;
let s = 0
let m = 0
let h = 0

/* function to start stopwatch */
function start(flag) {
    if(flag) {
        startButton.disabled = true;
    }

    /* Using setTimeout function */
    timeoutId = setTimeout(function() {
        s = parseInt(s)
        m = parseInt(m)
        h = parseInt(h)
        s++;

        if(s == 60) {
            m = m + 1;
            s = 0
        }

        if(m == 60) {
            h = h + 1;
            m = 0;
        }

        if (s < 10) {
            s = '0' + s;
        }
        if (m < 10) {
            m = '0' + m;
        }
        if (h < 10) {
            h = '0' + h;
        }

        stopwatch.innerHTML = `${h} : ${m} : ${s}`;
        start()
    }, 1000)
}

/* function to pause stopwatch */
function pause() {
    clearTimeout(timeoutId);
    startButton.disabled = false;
}
 
/* function to reset stopwatch */
function reset() {
    s = 0;
    m = 0;
    h = 0;
    clearTimeout(timeoutId);
    stopwatch.innerHTML = '00:00:00';
    startButton.disabled = false;
}