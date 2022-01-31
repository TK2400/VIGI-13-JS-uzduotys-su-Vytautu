function checkIfHasInput(id) {
    const element = document.getElementById(id);
    const hasElementValue = Boolean(element.value);
    return hasElementValue;
}

// console.log(checkIfHasInput('firstFemale'))
// console.log(checkIfHasInput('secondFemale'))
// console.log(checkIfHasInput('thirdFemale'))
// console.log(checkIfHasInput('firstMale'))
// console.log(checkIfHasInput('secondMale'))
// console.log(checkIfHasInput('thirdMale'))

// function countMale() {}

// function countFemale() {

// }

function countCal(firstId, secondId, thirdId) {
    const hasFirstInput = checkIfHasInput(firstId);
    const hasSecondInput = checkIfHasInput(secondId);
    const hasThirdInput = checkIfHasInput(thirdId);
    // console.log("hasFirstInput", hasFirstInput);
    // console.log("hasSecondInput", hasSecondInput);
    // console.log("hasThirdInput", hasThirdInput);
    const hasNoInput = hasFirstInput && hasSecondInput && hasThirdInput;
    // console.log(hasNoInput)
    if (!hasNoInput) {
        if (firstId === 'firstFemale') {
            const resultParagraph = document.getElementById('mistakeFemale')
            resultParagraph.innerHTML = "Klaida, įrašykite visas vertes!"
        } else {
            const resultParagraph = document.getElementById('mistakeMale')
            resultParagraph.innerHTML = "Klaida, įrašykite visas vertes!"
        }
        return
    }


    const firstValue = getValueFromInput(firstId)
        // console.log(firstValue)

    const secondValue = getValueFromInput(secondId)
        // console.log(secondValue)
    const thirdValue = getValueFromInput(thirdId)
        // console.log(thirdValue)

    const result = (10 * firstValue + 6.25 * secondValue - 5 * thirdValue)
        // writeResult(getCal)

    if (firstId === 'firstFemale') {
        const getCal = (result - 161) * 1.2
        const resultParagraph = document.getElementById('resultFemale')
        resultParagraph.innerHTML = "Kalorijų poreikis dirbant sėdimą darbą: " + getCal
    } else {
        const getCal = (result + 5) * 1.2
        const resultParagraph = document.getElementById('resultMale')
        resultParagraph.innerHTML = "Kalorijų poreikis dirbant sėdimą darbą: " + getCal
    }
}



function getValueFromInput(id) {
    const element = document.getElementById(id)
    const value = Number(element.value)
        // const valueAsNumber = Number(value)
        // console.log(typeof valueAsNumber)
        // console.log(typeof value)
    return value

}




// function writeResult(result) {
//     const resultParagraph = document.getElementById('resultMale')
//     resultParagraph.innerHTML = "Kalorijų poreikis dirbant sėdimą darbą: " + result
// }


/*function deleteValuesLeft() {
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
}*/