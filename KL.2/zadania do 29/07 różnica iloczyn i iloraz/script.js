const a = document.querySelector('#a');
const b = document.querySelector('#b');

const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function(){


    let iloraz = (Number(a.value) / Number(b.value));
    let iloczyn = (Number(a.value) * Number(b.value));
    let suma = (Number(a.value) + Number(b.value));
    let roznica = (Number(a.value) - Number(b.value));
        wynik.innerHTML = `
                        a = ${a.value} <br>
                        b = ${b.value} <br>
                        Iloraz = ${a.value} / ${b.value} =  ${iloraz} <br>
                        Iloczyn = ${a.value} * ${b.value} =  ${iloczyn} <br>
                        Suma = ${a.value} + ${b.value} =  ${suma} <br> 
                        Różnica = ${a.value} - ${b.value} =  ${roznica}`;

});