Indigo = document.querySelector('#Indigo')
SteelBlue = document.querySelector('#SteelBlue')
Olive = document.querySelector('#Olive')
prawy = document.querySelector('#prawy')
KolorCzcionki = document.querySelector('#KolorCzcionki')
Wielkosc = document.querySelector('#rozmiar')
ramka = document.querySelector('#ramka')
gibraltarZdj = document.querySelector('#gibraltar')
lista = document.querySelector('#lista')
dysk = document.querySelector('#dysk')
kwadrat = document.querySelector('#kwadrat')
okrag = document.querySelector('#okrag')



Indigo.addEventListener('click', function () {
    prawy.style.backgroundColor = "Indigo"
})
SteelBlue.addEventListener('click', function () {
    prawy.style.backgroundColor = "SteelBlue"
})
Olive.addEventListener('click', function () {
    prawy.style.backgroundColor = "Olive"
})
KolorCzcionki.addEventListener('click', function () {
    prawy.style.color = document.querySelector('select').options[KolorCzcionki.selectedIndex].text
})
Wielkosc.addEventListener('focusout', function () {
    prawy.style.fontSize = `${Wielkosc.value}`
})
ramka.addEventListener('click', function () {
    if (ramka.checked) {
        gibraltarZdj.style.border = `solid 1px white`
    } else {
        gibraltarZdj.style.border = `none`
    }
})
dysk.addEventListener('click', function (){

})

