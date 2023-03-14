btn = document.querySelector('#oblicz')
wynik = document.querySelector('#wynik')

btn.addEventListener('click', function () {
    let paliwo = parseInt(document.querySelector('#rodzaj_paliwa'))
    let litry = parseFloat(document.querySelector('#litry'))

    if(paliwo === 1){
        let koszt = litry * 4
        wynik.innerHTML = `koszt paliwa: ${koszt} zł`
    } else if (paliwo === 2){
        let koszt2 = litry * 3.5
        wynik.innerHTML = `koszt paliwa: ${koszt2} zł`
    } else if (paliwo !== 1 && paliwo !== 2){
        let koszt3 = 0
        wynik.innerHTML = `koszt paliwa: ${koszt3} zł`
    }

})