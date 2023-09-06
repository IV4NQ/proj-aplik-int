const btn = document.querySelector('#button')
const wynik = document.querySelector('#wynik')

btn.addEventListener('click', function () {

let tablica = [];
for (let i = 0; i < 7; i++) {
    tablica[i] = [];
}

function losujLiczbe(liczby) {
    const index = Math.floor(Math.random() * liczby.length)
    const liczba = liczby[index]
    liczby.splice(index, 1)
    return liczba
}

let liczby = []
    for(i=0;i<90;i++){
        liczby[i] = i+10
    }

for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 7; j++) {
        tablica[i][j] = losujLiczbe(liczby)
    }
}

wynik.innerHTML = ``
for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 7; j++) {
        wynik.innerHTML += tablica[i][j] + " "
    }
    wynik.innerHTML += `<br>`
}

})