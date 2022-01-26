function checkIfHasValue(id) {
    const element = document.getElementById(id);
    const hasElementValue = Boolean(element.value);
    return hasElementValue;
}

function tryConverting() {
    const hasCelsiusInputValue = checkIfHasValue("input-c");
    // ar yra kazkas irasyta i celsius lauka
    const hasFahrenheitInputValue = checkIfHasValue("input-f");
    // ar yra kazkas irasyta i farenheit lauka
    console.log("hasCelsiusInputValue", hasCelsiusInputValue);
    console.log("hasFarenheitInputValue", hasFahrenheitInputValue);
    // 
    //     // ! reikisa NERA vertes IR NERA vertes / true + true     
    //     // reikia mesti klaida, kai abu laukai tusti t.y. false; bet jei bus 
    //     // false && false, bus lygu false; todel reikia
    //     // apversti, su !, kad false taptu true; tada true + true = true
    // if (hasNoValue) {
    //     // tik kai hasNoValue === true, eis sitas kodas
    //     writeError()
    //     return // return sustabdys funcijos veikima, nes norime issiaiskinti kada bus klaida
    // galetume parasyti  - if (hasNoValue) return.writeError())
    // iki consol logo kodas nenueitu, nes return ivyksta ( jei abu laukai tusti)
    // console.log("x")
    const hasNoValue = !hasCelsiusInputValue && !hasFahrenheitInputValue
    const hasBothValues = hasCelsiusInputValue && hasFahrenheitInputValue
        // if (hasBothValues) {
        //     writeError()
        //     return
        // }
    const isInvalidValues = hasNoValue || hasBothValues // apjungtos abi salygos
    if (isInvalidValues) {
        writeError()
        return
    }

    if (hasCelsiusInputValue) {
        const celsiusValue = getNumberValueById("input-c")
        const fahrenheit = celsiusValue * 9 / 5 + 32
        writeValueById("input-f", fahrenheit)
    } else {
        const fahrenheitValue = getNumberValueById("input-f")
        const celsius = (fahrenheitValue - 32) * 5 / 9
        writeValueById("input-c", celsius)
    }
    //
}

function writeError() {
    const el = document.getElementById("error-text")
    el.innerHTML = "klaida!"
}



function trinti() {
    const clearInput1 = document.getElementById("input-c");
    const clearInput2 = document.getElementById("input-f");
    const clearP = document.getElementById("error-text");
    clearInput1.value = ""
    clearInput2.value = ""
    clearP.innerHTML = ""
}



function getNumberValueById(id) {
    const element = document.getElementById(id)
    const numberValue = Number(element.value)
    return numberValue;

}

function writeValueById(id, result) {
    const element = document.getElementById(id);
    element.value = result;
}