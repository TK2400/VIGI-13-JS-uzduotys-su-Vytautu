// function SubstractValues() {
//     const first = getElementNumberValue("first")
//         // console.log(first)
//     const second = getElementNumberValue("second")
//         // console.log(second)
//     const SubstractValues = first - second
//     writeResult(SubstractValues)
// }
function getElementNumberValue(id) {
    const firstElement = document.getElementById(id)
    const value = Number(firstElement.value)
    return value
}



function convert() {
    const celsius = getElementNumberValue("first")
        // console.log(celsius)
    const fahrenheit = getElementNumberValue("second")
        // console.log(fahrenheit)
    if (celsius > 0 && fahrenheit === 0) {
        const convert = celsius * 1.8 + 32;
        calculatedResult(convert)
    } else if (fahrenheit > 0 && celsius === null) {
        const convert = (fahrenheit - 32) * 5 / 9;
        calculatedResult(convert)
    } else {
        const convert = "netinkamos reiksmes"
        calculatedResult(convert)
    }
}

function calculatedResult(result) {
    const resultParagraph = document.getElementById("result")
    resultParagraph.innerHTML = "result is: " + result
}
// function convertToFahrenheit() {
//     const celsius = getElementNumberValue("first")
//     const convertToFahrenheit = celsius * 1.8 + 32
//     writeResult(convertToFahrenheit)
// }

// function convertToCelsius() {
//     const fahrenheit = getElementNumberValue("second")
//     const convertToCelsius = (fahrenheit - 32) * 5 / 9
//     writeResult(convertToCelsius)
// }



// const atsakymas1 = getElementNumberValue("first")
//     // console.log(atsakymas1)

// const atsakymas2 = getElementNumberValue("second")
//     // console.log(atsakymas2)




// const resultParagraph = document.getElementById("result")
// resultParagraph.innerHTML = "result is: " + result