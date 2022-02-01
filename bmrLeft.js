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
            const resultParagraph = document.getElementById('mistakeFemale').innerHTML = "Klaida, įrašykite visas vertes!"
                // resultParagraph.innerHTML = "Klaida, įrašykite visas vertes!"
        } else {
            const resultParagraph = document.getElementById('mistakeMale').innerHTML = "Klaida, įrašykite visas vertes!"
                // resultParagraph.innerHTML = "Klaida, įrašykite visas vertes!"
        }
        return
    }
    const firstValue = getValueFromInput(firstId)
        // console.log(firstValue)
    const secondValue = getValueFromInput(secondId)
        // console.log(secondValue)
    const thirdValue = getValueFromInput(thirdId)
        // console.log(thirdValue)
    const getCal = (10 * firstValue + 6.25 * secondValue - 5 * thirdValue)
    if (firstId === 'firstFemale') {
        const result = (getCal - 161) * 1.2
        const resultParagraph = document.getElementById('resultFemale')
        resultParagraph.innerHTML = "Kalorijų poreikis dirbant sėdimą darbą: " + result
    } else {
        const result = (getCal + 5) * 1.2
        const resultParagraph = document.getElementById('resultMale')
        resultParagraph.innerHTML = "Kalorijų poreikis dirbant sėdimą darbą: " + result
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

function deleteValues() {
    document.getElementById('firstFemale').value = "";
    document.getElementById('secondFemale').value = "";
    document.getElementById('thirdFemale').value = "";
    document.getElementById('mistakeFemale').innerHTML = "";
    document.getElementById('resultFemale').innerHTML = "";
    document.getElementById('firstMale').value = "";
    document.getElementById('secondMale').value = "";
    document.getElementById('thirdMale').value = "";
    document.getElementById('mistakeMale').innerHTML = "";
    document.getElementById('resultMale').innerHTML = "";
}

// NEVEIKIA PILNAI, be if firstid - female - veiia, bet tik vienoje puseje
//function deleteValues() {
//     if (firstId === 'firstFemale') {
//         document.querySelectorAll(".to-clear").forEach(element => {
//             if ("value" in element) {
//                 element.value = ""
//             } else {
//                 element.innerHTML = ""
//             }
//         });
//     } else {
//         document.querySelectorAll(".to-clear").forEach(element => {
//             if ("value" in element) {
//                 element.value = ""
//             } else {
//                 element.innerHTML = ""
//             }
//         });
//     }









// } else if (firstId === 'firstMale') {
//     document.querySelectorAll(".to-clear").forEach(element => {
//         if ("value" in element) {
//             element.value = ""
//         } else {
//             element.innerHTML = ""
//         }
//     });
// } else {
//     return
// }