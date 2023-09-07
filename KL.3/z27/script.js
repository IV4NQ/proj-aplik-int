const wynik = document.querySelector('#wynik');
const btn = document.querySelector('#button');


btn.addEventListener('click', function () {

    let x1 = document.querySelector('#x1').value
    let y1 = document.querySelector('#y1').value
    let x2 = document.querySelector('#x2').value
    let y2 = document.querySelector('#y2').value
    let x3 = document.querySelector('#x3').value
    let y3 = document.querySelector('#y3').value


    let pkt1_2 = ((x1-x2) * (x1-x2)) + ((y1-y2) * (y1-y2))
    let pkt1_3 = ((x1-x3) * (x1-x3)) + ((y1-y3) * (y1-y3))
    let pkt2_3 = ((x2-x3) * (x2-x3)) + ((y2-y3) * (y2-y3))
let wyn1_2 = Math.sqrt(pkt1_2)
let wyn1_3 = Math.sqrt(pkt1_3)
let wyn2_3 = Math.sqrt(pkt2_3)
    wynik.innerHTML = ``
    wynik.innerHTML = `<h3>Odległość wynosi pomiędzy P1 a P2 wynosi: ${wyn1_2}</<h3> <br>`
    wynik.innerHTML += `<h3>Odległość wynosi pomiędzy P1 a P3 wynosi: ${wyn1_3}</<h3> <br>`
    wynik.innerHTML += `<h3>Odległość wynosi pomiędzy P2 a P3 wynosi: ${wyn2_3}</<h3> <br>`




})