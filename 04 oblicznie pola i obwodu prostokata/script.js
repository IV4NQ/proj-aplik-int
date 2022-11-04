const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    let a = document.querySelector('#liczba_a').value;
    let b = document.querySelector('#liczba_b').value;
    a = parseFloat(a);
    b = parseFloat(b);
    let pole = a * b;
    let obw = (a+b)*2;

    let out = `<h1>Długość boku a: ${a}<br>
                Długość boku b: ${b}<br>
                Pole prostokąta = ${pole}<br>
                Obwód prostokąta = ${obw}`;

    wynik.innerHTML = out;
})