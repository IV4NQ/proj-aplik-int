function podatek(cena,typ){
    let podatek = 0
    if(!(cena<200)){
        if(cena<=1000){
            if(typ==="d"){
                podatek = cena * (0.15 - 0.05)
            }else{podatek = cena * 0.15}
        }else if(typ === "d"){
            podatek = cena * (0.22 - 0.05)
        }else{podatek = cena * 0.22}
    }
    return `Cena: ${cena} Typ: ${typ} Podatek: ${podatek}`
}
console.log(podatek(2137,"d"))