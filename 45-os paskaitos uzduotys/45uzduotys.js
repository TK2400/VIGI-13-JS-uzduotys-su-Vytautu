// paversti i masyva

const zygis = "10, 9, 4.5, 3.75, 18, 14.5, 7, 6.3, 11, 5.5"
const zygisMasyvas = zygis.split(", ")

// paversti i skaicius 
skaiciuMasyvas = zygisMasyvas.map(Number)
console.log(skaiciuMasyvas)

skaiciuMasyvasX = skaiciuMasyvas.map(function(sk) {
        return sk * 2
    })
    // masyvo kopija
arrayToSum = [...skaiciuMasyvasX]
console.log(arrayToSum)

// visu masyvo nariu suma
let sum = 0

function toSum(sk) {
    sum = sum + sk
    return
}
arrayToSum.forEach(toSum)
console.log(sum)


// visu masyvo nariu rusiavimas pagal dydi, per funkcija compare
function compare(a, b) {
    const Y = a - b
    return Y
}
arraySorted = [...skaiciuMasyvasX]
arraySorted.sort(compare)
console.log(arraySorted)

// paskutinio nario atpjovimas, gaunamas masyvas
console.log(skaiciuMasyvasX.slice(-1))


// radimas mazesniu skaiciu nei 12
arrayLessThan = arraySorted.filter(function(sk) {
    return sk < 12
})
console.log(arrayLessThan)


// paskutinio, didziausio is isrusiuoto masyvo skaiciaus radimas
console.log(arraySorted[arraySorted.length - 1])

// [12, 13,...] ===> 25
//  sumavimas su reduce funkcija

function reducerioFormule(
    accumulator, /**cia bus 0 ir po to kaupsis tai, ka grazinam.  // Gauna 6 // Gauna 13.2 */
    masyvoElementas // rusiuotasMasyvas[0] // rusiuotasMasyvas[1] // rusiuotasMasyvas[2] 
) {
    const atnaujintasAccumulator = accumulator + masyvoElementas;
    return atnaujintasAccumulator;
}

const apskaiciuotaSuma = rusiuotasMasyvas.reduce(reducerioFormule, 0);