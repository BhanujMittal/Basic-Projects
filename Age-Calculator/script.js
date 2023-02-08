let date = document.getElementById('date')
let calculate = document.getElementById('calculate')
let result = document.getElementById('result')

date.max = new Date().toISOString().split('T')[0];

function calculateAge() {
    let today = new Date();
    let birthDate = new Date(date.value)

    let years;
    if (today.getMonth() > birthDate.getMonth() || (today.getMonth() == birthDate.getMonth() && today.getDate() >= birthDate.getDate())) {
        years = today.getFullYear() - birthDate.getFullYear();
    } else {
        years = today.getFullYear() - birthDate.getFullYear() - 1;
    }

    let months;
    if (today.getDate() >= birthDate.getDate()) {
        months = today.getMonth() - birthDate.getMonth();
    } else if (today.getDate() < birthDate.getDate()) {
        months = today.getMonth() - birthDate.getMonth() - 1;
    }

    months = months < 0 ? months + 12 : months;

    let day;
    let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    if (today.getDate() >= birthDate.getDate()) {
        day = today.getDate() - birthDate.getDate()
    } else {
        day = today.getDate() - birthDate.getDate() + monthDays[birthDate.getMonth()];
    }

    result.innerHTML = `<p class="birthdate">You were born on ${birthDate.toDateString()}</p>`
    result.innerHTML += `<p class="date">You are ${years} years, ${months} months and ${day} days old</p>`

    if (months == 0 && day == 0) {
        result.innerHTML = `<p class="birthday">Happy BirthDay!!!!</p>`
    }
}

calculate.addEventListener('click', calculateAge)

document.addEventListener('keypress', (e) => {
    if (e.keyCode == 13) {
        calculate.click();
    }
})

date.focus()