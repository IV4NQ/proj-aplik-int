const liczba = document.querySelector('#liczba');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('#button');

btn.addEventListener('click', function() {
    let x = parseInt(liczba.value);
    let y = Math.abs(x);
    let dol2 = y**2
    let dol = 1 + dol2;
    let gora = x**2
    let wyn = gora/dol
    wynik.innerHTML = wyn
})