function lyginiaiSkaiciai(iki5k) {
    for (let i = 2; i <= iki5k; i = i + 1) {
        const liekana = i % 2
        if (liekana !== 0) {
            continue;
        }

        console.log(i)

        // kai bus continue, sita dalis neveik
    }
}

lyginiaiSkaiciai(1500)