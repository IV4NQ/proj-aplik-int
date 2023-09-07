const Indigo = document.querySelector('#Indigo')
const SteelBlue = document.querySelector('#SteelBlue')
const Olive = document.querySelector('#Olive')
const prawy = document.querySelector('#prawy')
const KolorCzcionki = document.querySelector('#KolorCzcionki')
const Wielkosc = document.querySelector('#rozmiar')
const ramka = document.querySelector('#ramka')
const gibraltarZdj = document.querySelector('#gibraltar')
const lista = document.querySelector('#lista')
const punktory = document.querySelectorAll('.punktor');


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

function zmienPunktory() {
    const wybranyPunkt = document.querySelector('.punktor:checked').value;
    if (wybranyPunkt === 'Kwadrat') {
        lista.style.listStyleType = 'square';
    } else if (wybranyPunkt === 'Okrąg') {
        lista.style.listStyleType = 'circle';
    } else {
        lista.style.listStyleType = 'disc';
    }
}

for (let i = 0; i < punktory.length; i++) {
    punktory[i].addEventListener('click', zmienPunktory);
}
