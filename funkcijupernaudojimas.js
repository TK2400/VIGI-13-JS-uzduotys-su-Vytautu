// function multipliedValues() {
//     const first = getElementNumberValue("first")
//         // console.log(first)
//     const second = getElementNumberValue("second")
//         // console.log(second)
//     const multipliedValues = first * second
//     writeResult(multipliedValues)
// }

// function dividedValues() {
//     const first = getElementNumberValue("first")
//         // console.log(first)
//     const second = getElementNumberValue("second")


//     const dividedValues = first / second
//     writeResult(dividedValues)
//         // console.log(dividedValues)
// }



// function SumValues() {
//     const first = getElementNumberValue("first")
//         // console.log(first)
//     const second = getElementNumberValue("second")
//         // console.log(second)
//     const SumValues = first + second
//     writeResult(SumValues)
// }

function SubstractValues() {
    const first = getElementNumberValue("first")
        // console.log(first)
    const second = getElementNumberValue("second")
        // console.log(second)
    const SubstractValues = first - second
    writeResult(SubstractValues)
}

function getElementNumberValue(id) {
    const firstElement = document.getElementById(id)

    const value = Number(firstElement.value)
        // const valueAsNumber = Number(value)
        // console.log(typeof valueAsNumber)
        // console.log(typeof value)
    return value
}

const atsakymas = getElementNumberValue("first")
console.log(atsakymas)



// function writeResult(result) {
// if (result == "Infinty") { // console.log(result)
//     const resultParagraph = document.getElementById("result")
//     resultParagraph.innerHTML = "result is: " + "dalyba is nulio negalima"
// } else {
// const resultParagraph = document.getElementById("result")
// resultParagraph.innerHTML = "result is: " + result
// }
// }



// multiplyValues()
// getElementNumberValue("first")
// getElementNumberValue("second")



// <
// input id = "first"
// type = "number"
// placeholder = "Pirmas skaicius" >
//     <
//     input id = "fsecond"
// type = "number"
// placeholder = "Pirmas skaicius" >
//     <
//     button id = "multiple" > Dauginti < /button> <
//     button id = "divide" > Dalinti < /button> <
//     p id = "result" > < /p>

//console.log