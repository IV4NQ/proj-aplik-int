function podatek(kwota, typ) {
    let podatek = 0
    if (!(kwota < 200)) {
        if (kwota <= 1000) {
            if (typ === "d") {
                podatek = kwota * (0.15 - 0.05)
            } else {
                podatek = kwota * 0.15
            }
        } else if (typ === "d") {
            podatek = kwota * (0.22 - 0.05)
        } else {
            podatek = kwota * 0.22
        }
    }
    return `Cena wynosi: ${kwota} Typ: ${typ} Podatek: ${podatek}`
}

console.log(podatek(1500, "d"))