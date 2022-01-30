function checkIfHasInput(id) {
    const element = document.getElementById(id);
    const hasElementValue = Boolean(element.value);
    return hasElementValue;
}


function countCalLeft() {
    const hasFirstInput = checkIfHasInput("firstLeft");
    const hasSecondInput = checkIfHasInput("secondLeft");
    const hasThirdInput = checkIfHasInput("thirdLeft");
    // console.log("hasFirstInput", hasFirstInput);
    // console.log("hasSecondInput", hasSecondInput);
    // console.log("hasThirdInput", hasThirdInput);
    const hasNoInput = hasFirstInput && hasSecondInput && hasThirdInput;
    // console.log(hasNoInput)
    if (!hasNoInput) {
        // alert("įrašykite visas vertes!")
        // return
        const mistake = document.getElementById("mistakeLeft");
        mistake.innerHTML = "Klaida, įrašykite visas vertes!"
        return
    }

    const firstValue = getValueFromInput("firstLeft")
        // console.log(firstValue)
    const secondValue = getValueFromInput("secondLeft")
        // console.log(secondValue)
    const thirdValue = getValueFromInput("thirdLeft")
        // console.log(thirdValue)
    const getCal = 1.2 * ((10 * firstValue + 6.25 * secondValue - 5 * thirdValue - 161))
    writeResultLeft(getCal)
}

function getValueFromInput(id) {
    const element = document.getElementById(id)
    const value = Number(element.value)
        // const valueAsNumber = Number(value)
        // console.log(typeof valueAsNumber)
        // console.log(typeof value)
    return value

}


function writeResultLeft(result) {
    const resultParagraph = document.getElementById("resultLeft")
    resultParagraph.innerHTML = "Kalorijų poreikis dirbant sėdimą darbą: " + result
}

function deleteValuesLeft() {
    const clearInput1 = document.getElementById("firstLeft");
    const clearInput2 = document.getElementById("secondLeft");
    const clearInput3 = document.getElementById("thirdLeft");
    const clearData = document.getElementById("resultLeft");
    const clearMistake = document.getElementById("mistakeLeft");
    clearInput1.value = ""
    clearInput2.value = ""
    clearInput3.value = ""
    clearData.innerHTML = ""
    clearMistake.innerHTML = ""
}