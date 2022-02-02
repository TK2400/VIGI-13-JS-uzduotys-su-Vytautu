function checkIfHasInput(id) {
    const element = document.getElementById(id);
    const hasElementValue = Boolean(element.value);
    return hasElementValue;
}


function countCal(svoris, ugis, amzius, klaida, Salyga, rezultatas) {
    const hasFirstInput = checkIfHasInput(svoris);
    const hasSecondInput = checkIfHasInput(ugis);
    const hasThirdInput = checkIfHasInput(amzius);
    const hasNoInput = hasFirstInput && hasSecondInput && hasThirdInput;
    if (!hasNoInput) {
        document.getElementById(klaida).innerHTML = "Klaida, įrašykite visas vertes!"
        return
    }
    const firstValue = getValueFromInput(svoris)
    const secondValue = getValueFromInput(ugis)
    const thirdValue = getValueFromInput(amzius)
    const getCal = (10 * firstValue + 6.25 * secondValue - 5 * thirdValue)
    let result
    if (!Salyga) {
        result = (getCal - 161) * 1.2
    } else {
        result = (getCal + 5) * 1.2
    }
    const resultParagraph = document.getElementById(rezultatas)
    resultParagraph.innerHTML = "Kalorijų poreikis dirbant sėdimą darbą: " + result
}

function getValueFromInput(id) {
    const element = document.getElementById(id)
    const value = Number(element.value)
    return value
}

function deleteValues(svoris, ugis, amzius, klaida, rezultatas) {
    document.getElementById(svoris).value = "";
    document.getElementById(ugis).value = "";
    document.getElementById(amzius).value = "";
    document.getElementById(klaida).innerHTML = "";
    document.getElementById(rezultatas).innerHTML = "";
}

// NEVEIKIA PILNAI, be if be firstid - female - veikia, bet tik vienoje puseje
// function deleteValues() {
//     document.querySelectorAll(" .Male-side .to-clear").forEach(element => {
//         if ("value" in element) {
//             element.value = ""
//         } else {
//             element.innerHTML = ""
//         }
//     });
// } else {
//     document.querySelectorAll(" .Female-side .to-clear").forEach(element => {
//         if ("value" in element) {
//             element.value = ""
//         } else {
//             element.innerHTML = ""
//         }
//     });
// }