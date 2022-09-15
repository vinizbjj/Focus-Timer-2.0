import {
    buttonPlay,
    buttonStop,
    buttonVolMore,
    buttonVolLess,
    buttonSoundForest,
    buttonSoundRain,
    buttonSoundCoffe,
    buttonSoundFire,
} from "./elements.js"

export default function events({ controls, timer, sound }) {


    buttonPlay.addEventListener('click', function () {
        timer.countdown()
    })

    buttonStop.addEventListener('click', function () {
        sound.pauseAllSounds()
        timer.stop()
    })

    buttonVolMore.addEventListener('click', function () {
        timer.volMore()
    })

    buttonVolLess.addEventListener('click', function () {
        timer.volLess()
    })

    buttonSoundForest.addEventListener('click', function () {
        sound.pressForestButton()
        controls.forestButton()
        controls.rainButtonDefault()
        controls.coffeButtonDefault()
        controls.fireButtonDefault()
    })

    buttonSoundRain.addEventListener('click', function () {
        sound.pressSoundRain()
        controls.rainButton()
        controls.forestButtonDefault()
        controls.coffeButtonDefault()
        controls.fireButtonDefault()

    })

    buttonSoundCoffe.addEventListener('click', function () {
        sound.pressSoundCoffe()
        controls.coffeButton()
        controls.forestButtonDefault()
        controls.rainButtonDefault()
        controls.fireButtonDefault()
    })

    buttonSoundFire.addEventListener('click', function () {
        sound.pressSoundFire()
        controls.fireButton()
        controls.forestButtonDefault()
        controls.rainButtonDefault()
        controls.coffeButtonDefault()
    })
}