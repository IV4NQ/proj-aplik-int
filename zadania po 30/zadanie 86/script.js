const liczba = document.querySelector('#liczba');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let a = parseInt(liczba.value)
    wynik.innerHTML = ``
    for(let i = 0; i<a; i++) {
       let x = Math.floor(Math.random() * 9 + 1)
        wynik.innerHTML += `<br>${x}  - `
        for (let j = 0; j<x; j++){
            wynik.innerHTML += `| `
        }
    }




})