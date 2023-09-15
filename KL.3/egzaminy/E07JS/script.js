const iloscProduktow = document.querySelectorAll('.ilosc')
const nazwaProduktow = document.querySelectorAll('.produkt')
const aktualizujPrzycisk = document.querySelectorAll('.aktualizuj')
const zamowPrzycisk = document.querySelectorAll('.zamow')
let idZamowienia = 0

function sprawdz() {
    iloscProduktow.forEach((produkt) => {
        if (produkt.innerHTML == 0) {
            produkt.style = 'background-color: red;'
        }
        else if (produkt.innerHTML >= 1 && produkt.innerHTML <= 5) {
            produkt.style = 'background-color: yellow;'
        }
        else{
            produkt.style = 'background-color: Honeydew;'
        }
    })
}

aktualizujPrzycisk.forEach((przycisk, i) => {
    przycisk.addEventListener('click', () => {
        iloscProduktow[i].innerHTML = prompt(`Podaj nową ilość:`)
        sprawdz()
    })
})

zamowPrzycisk.forEach((przycisk, i) => {
    przycisk.addEventListener('click', () => {
        alert(`Zamówienie nr: ${idZamowienia} Produkt: ${nazwaProduktow[i].innerHTML}`)
        idZamowienia++
    })
})
sprawdz()
