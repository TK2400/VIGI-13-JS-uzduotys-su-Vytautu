const zygisMyliomis = "10, 9, 4.5, 3.75, 18, 14.5, 7, 6.3, 11, 5.5"
const zygisMyliomisMasyvas = (zygisMyliomis.split(", "))
console.log(zygisMyliomisMasyvas)


function converterToDigits(x) {
    return Number(x)
}

const myliosSkaiciais = zygisMyliomisMasyvas.map(converterToDigits)
    // const myliosSkaiciais = zygisMyliomisMasyvas.map(Number)

console.log(myliosSkaiciais)

function keitklisIKm(x) {
    return x * 1.6
}
const zygisKm = myliosSkaiciais.map(keitklisIKm)
console.log(zygisKm)

const zygisKmMasyvas = myliosSkaiciais.map(function(sk) {
    return sk * 1.6
})
console.log(zygisKmMasyvas)

const sortedKmMasyvas = [...zygisKmMasyvas]
sortedKmMasyvas.sort(palyginimoFunkcijaRusiavimui)
console.log(sortedKmMasyvas)

function palyginimoFunkcijaRusiavimui(a, b) {
    // tikisi neigiamu reiksme; jei A neigiamas, pirmesnis
    // teigiamas, jei 1, jei B elementas bus pirmesnis
    // 0 reiksme, jei elementu isdeliojimas toks pat
    const aPozija = a - b
    return aPozija
}

/*function compare(a, b) {
    if (a is less than b by some ordering criterion) {
        return -1;
    }
    if (a is greater than b by the ordering criterion) {
        return 1;
    }
    // a must be equal to b
    return 0;
}*/

let suma = 0
sortedKmMasyvas.forEach(function(sk) {
    suma = suma + sk
})
console.log(suma)

let kitaSuma = 0
for (let i = 0; i < sortedKmMasyvas.length; i++) {
    kitaSuma = kitaSuma + sortedKmMasyvas[i]
}

console.log(kitaSuma)