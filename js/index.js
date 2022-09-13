const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonVolMore = document.querySelector('.volMore')
const buttonVolLess = document.querySelector('.volLess')

const buttonSoundForest = document.querySelector('.forestSound')
const buttonSoundRain = document.querySelector('.rainSound')
const buttonSoundCoffe = document.querySelector('.coffeSound')
const buttonSoundFire = document.querySelector('.fireSound')

let minutes



const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')


function countdown() {
    setTimeout(function () {
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)

        if (minutes <= 0 && seconds <= 0) {
            return

        }
        if (seconds <= 0) {
            seconds = 7

            minutesDisplay.textContent = String(minutes - 1).padStart(2, '0')
        }

        secondsDisplay.textContent = String(seconds - 1).padStart(2, '0')



        countdown()

    }, 1000)
}

buttonPlay.addEventListener('click', function () {
    minutes = prompt('Quantos minutos?')
    minutesDisplay.textContent = String(minutes - 1).padStart(2, '0')
    countdown()


})

buttonStop.addEventListener('click', function () {
})

buttonVolMore.addEventListener('click', function () {
})

buttonVolLess.addEventListener('click', function () {
})