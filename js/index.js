const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonVolMore = document.querySelector('.volMore')
const buttonVolLess = document.querySelector('.volLess')

const buttonSoundForest = document.querySelector('.forestSound')
const buttonSoundRain = document.querySelector('.rainSound')
const buttonSoundCoffe = document.querySelector('.coffeSound')
const buttonSoundFire = document.querySelector('.fireSound')

let minutes
let seconds




const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

function twoDigits(digit) {
    if (digit < 10) {
        return ('0' + digit)
    } else {
        return (digit)
    }
}

function countdown() {
    minutes = setTimeout(function () {
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)

        if (minutes <= 0 && seconds <= 0) {
            return

        }
        if (seconds <= 0) {
            seconds = 60

            minutesDisplay.textContent = String(minutes - 1).padStart(2, '0')
        }

        secondsDisplay.textContent = String(seconds - 1).padStart(2, '0')
        countdown()

    }, 1000)
}

buttonPlay.addEventListener('click', function () {
    minutes = Number(prompt('Quantos minutos?'))
    minutesDisplay.textContent = String(minutes - 1).padStart(2, '0')
    countdown()
})

buttonStop.addEventListener('click', function () {

    clearTimeout(minutes)
    minutes = "00"
    seconds = "00"
    minutesDisplay.textContent = minutes
    secondsDisplay.textContent = seconds
})

buttonVolMore.addEventListener('click', function () {
    minutesDisplay.textContent = Number(minutesDisplay.textContent) + 5
})

buttonVolLess.addEventListener('click', function () {
    minutesDisplay.textContent = Number(minutesDisplay.textContent) - 5
})

