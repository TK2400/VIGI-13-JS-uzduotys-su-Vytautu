function checkIfHasInput(id) {
    const element = document.getElementById(id);
    const hasElementValue = Boolean(element.value);
    return hasElementValue;
}


function countCalRight() {
    const hasFirstInput = checkIfHasInput("firstRight");
    const hasSecondInput = checkIfHasInput("secondRight");
    const hasThirdInput = checkIfHasInput("thirdRight");
    // console.log("hasFirstInput", hasFirstInput);
    // console.log("hasSecondInput", hasSecondInput);
    // console.log("hasThirdInput", hasThirdInput);
    const hasNoInput = hasFirstInput && hasSecondInput && hasThirdInput;
    // console.log(hasNoInput)
    if (!hasNoInput) {
        // alert("įrašykite visas vertes!")
        // return
        const mistake = document.getElementById("mistakeRight");
        mistake.innerHTML = "Klaida, įrašykite visas vertes!"
        return
    }
    const firstValue = getValueFromInput("firstRight")
        // console.log(firstValue)
    const secondValue = getValueFromInput("secondRight")
        // console.log(secondValue)
    const thirdValue = getValueFromInput("thirdRight")
        // console.log(thirdValue)
    const getCal = 1.2 * ((10 * firstValue + 6.25 * secondValue - 5 * thirdValue + 5))
    writeResultRight(getCal)
}

function getValueFromInput(id) {
    const element = document.getElementById(id)
    const value = Number(element.value)
        // const valueAsNumber = Number(value)
        // console.log(typeof valueAsNumber)
        // console.log(typeof value)
    return value

}


function writeResultRight(result) {
    const resultParagraph = document.getElementById("resultRight")
    resultParagraph.innerHTML = "Kalorijų poreikis dirbant sėdimą darbą: " + result
}

function deleteValuesRight() {
    const clearInput1 = document.getElementById("firstRight");
    const clearInput2 = document.getElementById("secondRight");
    const clearInput3 = document.getElementById("thirdRight");
    const clearData = document.getElementById("resultRight");
    const clearMistake = document.getElementById("mistakeRight");
    clearInput1.value = ""
    clearInput2.value = ""
    clearInput3.value = ""
    clearData.innerHTML = ""
    clearMistake.innerHTML = ""
}