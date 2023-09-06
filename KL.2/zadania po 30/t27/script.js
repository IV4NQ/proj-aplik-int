const wynik = document.querySelector('#wynik')
const btn = document.querySelector('#button')


    let tab = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]

    function przekatne(tab) {

        wynik.innerHTML = `Tablica: <br>`
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                tab[i][j] = Math.floor(Math.random() * (9 + 1))
                wynik.innerHTML += `${tab[i][j]} `
            }
            wynik.innerHTML += `<br>`
        }

        let LG_PD = tab[0][0] + tab[1][1] + tab[2][2]
        let LD_PG = tab[0][2] + tab[1][1] + tab[2][0]

        if (LG_PD === LD_PG) {
            wynik.innerHTML +=
                `<br> Suma przekątnej LG_PD: ${LG_PD}
                 <br> Suma przekątnej LD_PG: ${LD_PG}
                 <br> Przekątne są równe`
        } else if (LD_PG > LG_PD) {
            wynik.innerHTML +=
                `<br> Suma przekątnej LG_PD: ${LG_PD}
                 <br> Suma przekątnej LD_PG: ${LD_PG}
                 <br> Suma przekątnej LD_PG jest większa od sumy przekątnej LG_PD.`
        } else {
            wynik.innerHTML +=
                `<br> Suma przekątnej LG_PD: ${LG_PD}
                 <br> Suma przekątnej LD_PG: ${LD_PG}
                 <br> Suma przekątnej LG_PD jest większa od sumy przekątnej LD_PG.`
        }
    }

btn.addEventListener('click', function () {
    przekatne(tab)
})