function checkIfHasInput(id) {
    const element = document.getElementById(id);
    const hasElementValue = Boolean(element.value);
    return hasElementValue;
}


function countCal() {
    const hasFirstInput = checkIfHasInput("first");
    const hasSecondInput = checkIfHasInput("second");
    const hasThirdInput = checkIfHasInput("third");
    // console.log("hasFirstInput", hasFirstInput);
    // console.log("hasSecondInput", hasSecondInput);
    // console.log("hasThirdInput", hasThirdInput);
    const hasNoInput = hasFirstInput && hasSecondInput && hasThirdInput;
    // console.log(hasNoInput)
    if (!hasNoInput) {
        alert("įrašykite visas vertes!")
        return
    }
    const firstValue = getValueFromInput("first")
        // console.log(firstValue)
    const secondValue = getValueFromInput("second")
        // console.log(secondValue)
    const thirdValue = getValueFromInput("third")
        // console.log(thirdValue)
    const getCal = 1.2 * ((10 * firstValue + 6.25 * secondValue - 5 * thirdValue + 5))
    writeResult(getCal)
}

function getValueFromInput(id) {
    const element = document.getElementById(id)
    const value = Number(element.value)
        // const valueAsNumber = Number(value)
        // console.log(typeof valueAsNumber)
        // console.log(typeof value)
    return value

}


function writeResult(result) {
    const resultParagraph = document.getElementById("result")
    resultParagraph.innerHTML = "Kalorijų poreikis dirbant sėdimą darbą: " + result
}

function deleteValues() {
    const clearInput1 = document.getElementById("first");
    const clearInput2 = document.getElementById("second");
    const clearInput3 = document.getElementById("third");
    const clearP = document.getElementById("result");
    clearInput1.value = ""
    clearInput2.value = ""
    clearInput3.value = ""
    clearP.innerHTML = ""
}