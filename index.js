const numberInput = document.getElementById('number-input')
const calcBtn = document.getElementById('calculate')
const lengthResult = document.getElementById('length-result')
const volumeResult = document.getElementById('volume-result')
const massResult = document.getElementById('mass-result')


//check if value inputted is a number
calcBtn.addEventListener('click', function() {
    let value = numberInput.value
    if (isNaN(value)) {
        lengthResult.innerText = "Please enter a valid number"
        volumeResult.innerText = "Please enter a valid number"
        massResult.innerText = "Please enter a valid number"
    } else {
        lengthConvert()
        volumeConvert()
        massConvert()
    }
})

//length conversion function
function lengthConvert() {
    let value = numberInput.value
    let meter = value / 3.281
    meter = meter.toFixed(3)
    let feet = value * 3.281
    feet = feet.toFixed(3)

    length = `${value} meters = ${feet} feet | ${value} feet = ${meter} meters`
    lengthResult.innerText = length
}

//volume conversion function
function volumeConvert() {
    let value = numberInput.value
    let liter = value / 0.264
    liter = liter.toFixed(3)
    let gallons = value * 0.264
    gallons = gallons.toFixed(3)
    
    volume = `${value} liters = ${gallons} gallons | ${value} gallons = ${liter} liters`
    volumeResult.innerText = volume
}

//mass conversion function
function massConvert() {
    let value = numberInput.value
    let kilogram = value / 2.204
    kilogram = kilogram.toFixed(3)
    let pounds = value * 2.204
    pounds = pounds.toFixed(3)
    
    mass = `${value} kilograms = ${pounds} pounds | ${value} pounds = ${kilogram} kilograms`
    massResult.innerText = mass
}