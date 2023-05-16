const celsiusEl = document.getElementById('celsius')
const fahrenheitEl = document.getElementById('fahrenheit')
const kelvinEl = document.getElementById('kelvin')

function tempCalc(){
    let celsius = celsiusEl.value
    fahrenheitEl.value = ((celsius * 9 / 5) + 32)
    kelvinEl.value =+ celsius + 273.15
}
