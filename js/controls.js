export default function () {

    function forestButton() {
        document.getElementById('forestBackground').style.fill = '#02799D'
        document.getElementById('forestIcon').style.fill = 'white'
    }

    function rainButton() {
        document.getElementById('rainBackground').style.fill = '#02799D'
        document.getElementById('rainIcon').style.fill = 'white'
    }

    function coffeButton() {
        document.getElementById('coffeBackground').style.fill = '#02799D'
        document.getElementById('coffeIcon').style.fill = 'white'
    }

    function fireButton() {
        document.getElementById('fireBackground').style.fill = '#02799D'
        document.getElementById('fireIcon').style.fill = 'white'
    }


    function forestButtonDefault() {
        document.getElementById('forestBackground').style.fill = "#E1E1E6"
        document.getElementById('forestIcon').style.fill = '#323238'
    }

    function rainButtonDefault() {
        document.getElementById('rainBackground').style.fill = "#E1E1E6"
        document.getElementById('rainIcon').style.fill = '#323238'
    }

    function coffeButtonDefault() {
        document.getElementById('coffeBackground').style.fill = "#E1E1E6"
        document.getElementById('coffeIcon').style.fill = '#323238'
    }

    function fireButtonDefault() {
        document.getElementById('fireBackground').style.fill = "#E1E1E6"
        document.getElementById('fireIcon').style.fill = '#323238'
    }


    return {
        forestButton,
        rainButton,
        coffeButton,
        fireButton,
        forestButtonDefault,
        rainButtonDefault,
        coffeButtonDefault,
        fireButtonDefault
    }
}







