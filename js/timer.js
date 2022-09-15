export default function Timer({
    minutesDisplay,
    secondsDisplay,


}) {

    let minutes = 60
    let seconds


    function countdown() {
        minutes = setTimeout(function () {
            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)

            if (minutes <= 0 && seconds <= 0) {
                return

            }
            if (seconds <= 0) {
                seconds = 60
                minutesDisplay.textContent = Number(minutes - 1)

                if (minutesDisplay.textContent.length < 2) {
                    minutesDisplay.textContent = '0' + minutesDisplay.textContent
                } else {
                    minutesDisplay.textContent
                }

            }

            secondsDisplay.textContent = String(seconds - 1).padStart(2, '0')
            countdown()

        }, 1000)
    }

    function stop() {
        clearTimeout(minutes)
        minutes = "00"
        seconds = "00"
        minutesDisplay.textContent = minutes
        secondsDisplay.textContent = seconds

    }

    function volMore() {
        minutesDisplay.textContent = Number(minutesDisplay.textContent) + 5

        if (minutesDisplay.textContent < 10) {
            minutesDisplay.textContent = '0' + minutesDisplay.textContent
        } else {
            minutesDisplay.textContent
        }
    }

    function volLess() {
        if (Number(minutesDisplay.textContent > 5)) {
            minutesDisplay.textContent = Number(minutesDisplay.textContent) - 5
            if (minutesDisplay.textContent.length < 2) {
                minutesDisplay.textContent = '0' + minutesDisplay.textContent
            } else {
                minutesDisplay.textContent
            }

        } else {
            clearTimeout(minutes)
            minutes = "00"
            seconds = "00"
            minutesDisplay.textContent = minutes
            secondsDisplay.textContent = seconds

        }
    }

    return {
        countdown,
        stop,
        volMore,
        volLess,
    }


}