// this functin is used to clear all input
function Reload() {
    location.reload()
    document.getElementById('b1').value = "";
    document.getElementById('b2').value = "";
    document.getElementById('b3').value = "";
    document.getElementById('b4').value = "";
    document.getElementById('b5').value = "";
    document.getElementById('b6').value = "";
    document.getElementById('b7').value = "";
    document.getElementById('b8').value = "";
    document.getElementById('b9').value = "";
}

// main funciton which declares the winner
function myFunc() {
    var b1, b2, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementsByClassName('box')[0].value
    b2 = document.getElementsByClassName('box')[1].value
    b3 = document.getElementsByClassName('box')[2].value
    b4 = document.getElementsByClassName('box')[3].value
    b5 = document.getElementsByClassName('box')[4].value
    b6 = document.getElementsByClassName('box')[5].value
    b7 = document.getElementsByClassName('box')[6].value
    b8 = document.getElementsByClassName('box')[7].value
    b9 = document.getElementsByClassName('box')[8].value

    if (b1 == 'X' && b2 == 'X' && b3 == 'X') {
        window.alert('Player X Won')

        document.getElementById('b4').disabled = "true"
        document.getElementById('b5').disabled = "true"
        document.getElementById('b6').disabled = "true"
        document.getElementById('b7').disabled = "true"
        document.getElementById('b8').disabled = "true"
        document.getElementById('b9').disabled = "true"
        Reload()
    }

    else if (b1 == 'X' && b4 == 'X' && b7 == 'X') {
        window.alert('Player X Won')

        document.getElementById('b2').disabled = "true"
        document.getElementById('b3').disabled = "true"
        document.getElementById('b5').disabled = "true"
        document.getElementById('b6').disabled = "true"
        document.getElementById('b8').disabled = "true"
        document.getElementById('b9').disabled = "true"
        Reload()
    }

    else if (b1 == 'X' && b5 == 'X' && b9 == 'X') {
        window.alert('Player X Won')

        document.getElementById('b2').disabled = "true"
        document.getElementById('b3').disabled = "true"
        document.getElementById('b4').disabled = "true"
        document.getElementById('b6').disabled = "true"
        document.getElementById('b7').disabled = "true"
        document.getElementById('b8').disabled = "true"
        Reload()
    }

    else if (b2 == 'X' && b5 == 'X' && b8 == 'X') {
        window.alert('Player X Won')

        document.getElementById('b1').disabled = "true"
        document.getElementById('b3').disabled = "true"
        document.getElementById('b4').disabled = "true"
        document.getElementById('b6').disabled = "true"
        document.getElementById('b7').disabled = "true"
        document.getElementById('b9').disabled = "true"
        Reload()
    }

    else if (b3 == 'X' && b6 == 'X' && b9 == 'X') {
        window.alert('Player X Won')

        document.getElementById('b1').disabled = "true"
        document.getElementById('b2').disabled = "true"
        document.getElementById('b4').disabled = "true"
        document.getElementById('b5').disabled = "true"
        document.getElementById('b7').disabled = "true"
        document.getElementById('b8').disabled = "true"
        Reload()
    }

    else if (b3 == 'X' && b5 == 'X' && b7 == 'X') {
        window.alert('Player X Won')

        document.getElementById('b1').disabled = "true"
        document.getElementById('b2').disabled = "true"
        document.getElementById('b4').disabled = "true"
        document.getElementById('b6').disabled = "true"
        document.getElementById('b8').disabled = "true"
        document.getElementById('b9').disabled = "true"
        Reload();
    }

    else if (b4 == 'X' && b5 == 'X' && b6 == 'X') {
        window.alert('Player X Won')

        document.getElementById('b1').disabled = "true"
        document.getElementById('b2').disabled = "true"
        document.getElementById('b3').disabled = "true"
        document.getElementById('b7').disabled = "true"
        document.getElementById('b8').disabled = "true"
        document.getElementById('b9').disabled = "true"
        Reload()
    }

    else if (b7 == 'X' && b8 == 'X' && b9 == 'X') {
        window.alert('Player X Won')

        document.getElementById('b1').disabled = "true"
        document.getElementById('b2').disabled = "true"
        document.getElementById('b3').disabled = "true"
        document.getElementById('b4').disabled = "true"
        document.getElementById('b5').disabled = "true"
        document.getElementById('b6').disabled = "true"
        Reload()
    }

    else if (b1 == '0' && b2 == '0' && b3 == '0') {
        window.alert('Player 0 Won')

        document.getElementById('b4').disabled = "true"
        document.getElementById('b5').disabled = "true"
        document.getElementById('b6').disabled = "true"
        document.getElementById('b7').disabled = "true"
        document.getElementById('b8').disabled = "true"
        document.getElementById('b9').disabled = "true"
        Reload()
    }

    else if (b1 == '0' && b4 == '0' && b7 == '0') {
        window.alert('Player 0 Won')

        document.getElementById('b2').disabled = "true"
        document.getElementById('b3').disabled = "true"
        document.getElementById('b5').disabled = "true"
        document.getElementById('b6').disabled = "true"
        document.getElementById('b8').disabled = "true"
        document.getElementById('b9').disabled = "true"
        Reload()
    }

    else if (b1 == '0' && b5 == '0' && b9 == '0') {
        window.alert('Player 0 Won')

        document.getElementById('b2').disabled = "true"
        document.getElementById('b3').disabled = "true"
        document.getElementById('b4').disabled = "true"
        document.getElementById('b6').disabled = "true"
        document.getElementById('b7').disabled = "true"
        document.getElementById('b8').disabled = "true"
        Reload()
    }

    else if (b2 == '0' && b5 == '0' && b8 == '0') {
        window.alert('Player 0 Won')

        document.getElementById('b1').disabled = "true"
        document.getElementById('b3').disabled = "true"
        document.getElementById('b4').disabled = "true"
        document.getElementById('b6').disabled = "true"
        document.getElementById('b7').disabled = "true"
        document.getElementById('b9').disabled = "true"
        Reload()
    }

    else if (b3 == '0' && b6 == '0' && b9 == '0') {
        window.alert('Player 0 Won')

        document.getElementById('b1').disabled = "true"
        document.getElementById('b2').disabled = "true"
        document.getElementById('b4').disabled = "true"
        document.getElementById('b5').disabled = "true"
        document.getElementById('b7').disabled = "true"
        document.getElementById('b8').disabled = "true"
        Reload()
    }

    else if (b3 == '0' && b5 == '0' && b7 == '0') {
        window.alert('Player 0 Won')

        document.getElementById('b1').disabled = "true"
        document.getElementById('b2').disabled = "true"
        document.getElementById('b4').disabled = "true"
        document.getElementById('b6').disabled = "true"
        document.getElementById('b8').disabled = "true"
        document.getElementById('b9').disabled = "true"
        Reload()
    }

    else if (b4 == '0' && b5 == '0' && b6 == '0') {
        window.alert('Player 0 Won')

        document.getElementById('b1').disabled = "true"
        document.getElementById('b2').disabled = "true"
        document.getElementById('b3').disabled = "true"
        document.getElementById('b7').disabled = "true"
        document.getElementById('b8').disabled = "true"
        document.getElementById('b9').disabled = "true"
        Reload()
    }

    else if (b7 == '0' && b8 == '0' && b9 == '0') {
        window.alert('Player 0 Won')

        document.getElementById('b1').disabled = "true"
        document.getElementById('b2').disabled = "true"
        document.getElementById('b3').disabled = "true"
        document.getElementById('b4').disabled = "true"
        document.getElementById('b5').disabled = "true"
        document.getElementById('b6').disabled = "true"
        Reload()
    }

    // this displays when the match is tied
    else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
        || b2 == '0') && (b3 == 'X' || b3 == '0') &&
        (b4 == 'X' || b4 == '0') && (b5 == 'X' ||
            b5 == '0') && (b6 == 'X' || b6 == '0') &&
        (b7 == 'X' || b7 == '0') && (b8 == 'X' ||
            b8 == '0') && (b9 == 'X' || b9 == '0')) {
        document.getElementById('print')
            .innerHTML = "Match Tie";
        window.alert('Match Tie');
        Reload()
    }

    // it shows the player turn
    else {
        if (flag == 1) {
            document.getElementById('print').innerHTML = "Player X Turn"
        } else {
            document.getElementById('print').innerHTML = "Player 0 Turn"
        }
    }
}

let flag = 1;

// this works as both players turn one by one.
function myfunc_2() {
    if (flag == 1) {
        document.getElementById('b1').value = 'X'
        document.getElementById('b1').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('b1').value = '0';
        document.getElementById('b1').disabled = true;
        flag = 1;
    }
}

function myfunc_3() {
    if (flag == 1) {
        document.getElementById('b2').value = 'X'
        document.getElementById('b2').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('b2').value = '0';
        document.getElementById('b2').disabled = true;
        flag = 1;
    }
}

function myfunc_4() {
    if (flag == 1) {
        document.getElementById('b3').value = 'X'
        document.getElementById('b3').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('b3').value = '0';
        document.getElementById('b3').disabled = true;
        flag = 1;
    }
}


function myfunc_5() {
    if (flag == 1) {
        document.getElementById('b4').value = 'X'
        document.getElementById('b4').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('b4').value = '0';
        document.getElementById('b4').disabled = true;
        flag = 1;
    }
}

function myfunc_6() {
    if (flag == 1) {
        document.getElementById('b5').value = 'X'
        document.getElementById('b5').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('b5').value = '0';
        document.getElementById('b5').disabled = true;
        flag = 1;
    }
}

function myfunc_7() {
    if (flag == 1) {
        document.getElementById('b6').value = 'X'
        document.getElementById('b6').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('b6').value = '0';
        document.getElementById('b6').disabled = true;
        flag = 1;
    }
}

function myfunc_8() {
    if (flag == 1) {
        document.getElementById('b7').value = 'X'
        document.getElementById('b7').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('b7').value = '0';
        document.getElementById('b7').disabled = true;
        flag = 1;
    }
}

function myfunc_9() {
    if (flag == 1) {
        document.getElementById('b8').value = 'X'
        document.getElementById('b8').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('b8').value = '0';
        document.getElementById('b8').disabled = true;
        flag = 1;
    }
}

function myfunc_10() {
    if (flag == 1) {
        document.getElementById('b9').value = 'X'
        document.getElementById('b9').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('b9').value = '0';
        document.getElementById('b9').disabled = true;
        flag = 1;
    }
}

