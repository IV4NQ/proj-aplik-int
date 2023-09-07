const wynik = document.querySelector('#wynik');
const btn = document.querySelector('#button');


btn.addEventListener('click', function () {

    let x1 = document.querySelector('#x1').value
    let y1 = document.querySelector('#y1').value
    let z1 = document.querySelector('#z1').value
    let x2 = document.querySelector('#x2').value
    let y2 = document.querySelector('#y2').value
    let z2 = document.querySelector('#z2').value


    let pkt = ((x1-x2) * (x1-x2)) + ((y1-y2) * (y1-y2)) + ((z1-z2) * (z1-z2))
let wyn = Math.sqrt(pkt)

    wynik.innerHTML = `<h3>Odległość wynosi pomiędzy punktami wynosi: ${wyn}</h3>`





})