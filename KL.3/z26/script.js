const wynik = document.querySelector('#wynik');
const btn = document.querySelector('#button');


btn.addEventListener('click', function () {

let x1 = document.querySelector('#x1').value
let x2 = document.querySelector('#x2').value
let y1 = document.querySelector('#y1').value
let y2 = document.querySelector('#y2').value

let potega1 = (x1-x2) * (x1-x2)
let potega2 = (y1-y2) * (y1-y2)
let wyn = Math.sqrt((potega1 + potega2))

    wynik.innerHTML = `Odległość wynosi: ${wyn}`



})