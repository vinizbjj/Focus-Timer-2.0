export default function () {
    const buttonSoundForest = new Audio("https://drive.google.com/u/0/uc?id=1CRHkV72WUMdcqec5GT_KdsqFz0z3VAOA&export=download")
    const buttonSoundRain = new Audio("https://drive.google.com/u/0/uc?id=1Ip8xBqAUJ-bty51Wz8JBtX_bWXCgA0P2&export=download")
    const buttonSoundCoffe = new Audio("https://drive.google.com/u/0/uc?id=1OxLKpCwg2wrxXFNUHgZxJ51QEt0ac5RA&export=download")
    const buttonSoundFire = new Audio("https://drive.google.com/u/0/uc?id=1MakaBPxJvTa_whaSM3kEbRcxiVd1GRCB&export=download")




    function pressForestButton() {
        buttonSoundForest.play()
        buttonSoundRain.pause()
        buttonSoundCoffe.pause()
        buttonSoundFire.pause()


    }

    function pressSoundRain() {
        buttonSoundRain.play()
        buttonSoundForest.pause()
        buttonSoundCoffe.pause()
        buttonSoundFire.pause()
    }

    function pressSoundCoffe() {
        buttonSoundCoffe.play()
        buttonSoundForest.pause()
        buttonSoundRain.pause()
        buttonSoundFire.pause()
    }


    function pressSoundFire() {
        buttonSoundFire.play()
        buttonSoundForest.pause()
        buttonSoundRain.pause()
        buttonSoundCoffe.pause()
    }

    function pauseAllSounds() {
        buttonSoundForest.pause()
        buttonSoundRain.pause()
        buttonSoundCoffe.pause()
        buttonSoundFire.pause()
    }



    return {
        pressForestButton,
        pressSoundRain,
        pressSoundCoffe,
        pressSoundFire,
        pauseAllSounds
    }
}

