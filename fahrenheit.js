// Veikiantis konverteris Celsius/Fahrenheit/Celsius

function getElementValue(id) {
    const firstElement = document.getElementById(id)
    const value = Number(firstElement.value)
    return value
}



function convert() {
    const celsius = getElementValue("first")
    const fahrenheit = getElementValue("second")
    if (typeof celsius === 'number' && fahrenheit === 0) {
        const convert = celsius * 1.8 + 32;
        calculatedResult(convert)
    } else if (typeof fahrenheit === 'number' && celsius === 0) {
        const convert = (fahrenheit - 32) * 5 / 9;
        calculatedResult(convert)
    } else {
        calculatedResult()
    }
}

function calculatedResult(result) {
    const celsius = getElementValue("first")
    const fahrenheit = getElementValue("second")
    const resultParagraph = document.getElementById("result")
    if (fahrenheit === 0) {
        resultParagraph.innerHTML = "Atsakymas: " + result.toFixed(2) + " F°"
    } else if (celsius === 0) {
        resultParagraph.innerHTML = `Atsakymas:  ${result.toFixed(2)} C°`
    } else {
        resultParagraph.innerHTML = 'Atsakymas: klaida, patikrinkite sąlygas.'
    }
}