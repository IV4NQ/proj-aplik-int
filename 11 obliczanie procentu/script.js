let wartosc = document.querySelector('#wartosc');
let procent = document.querySelector('#procent');
const btn = document.querySelector('#button');
const wynik = document.querySelector('#wynik');

btn.addEventListener('click', function () {
    let a = parseInt(wartosc.value)
    let b = parseInt(procent.value)
    let proc = b/100
    let wyn = a*proc


    wynik.innerHTML = wyn




})