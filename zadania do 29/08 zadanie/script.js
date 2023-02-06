const sek = document.querySelector('#sek');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('#button');


btn.addEventListener('click', function () {
    let s = parseInt(sek.value)
    let g = Math.floor(s/3600)
    let reszG = s%3600
    let min = Math.floor(reszG/60)
    let reszM = reszG%60
    let sekund = reszM

    wynik.innerHTML = 'Godziny: ' +g +'<br>' +'Minuty: ' +min +'<br>' +'Sekundy: ' +sekund




})