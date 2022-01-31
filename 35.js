function lyginiaiSkaiciai(iki5k) {
    for (let i = 2; i <= iki5k; i = i + 1) {
        const liekana = i % 2 // tikrinama liekana
        if (liekana !== 0) {
            continue;
        }
        console.log(i)
            // kai bus continue, sita dalis neveik
    }
}
lyginiaiSkaiciai(15)

let y = 10
while (y <= 50) {
    y++
    if (y % 2) {
        continue // praleisti ir vykdyti toliau
        // break - gaus pirma skaiciu atitinkant salyga ir sustabdys cikla
        // atsiduriame uz ciklo ribu
        // continue ir break veiki ir "for" ir "while" cikluose
        // jei bus salyga "nelygu - !==" tada continue gaves false vkdys toliau
    }
    console.log(y)
}