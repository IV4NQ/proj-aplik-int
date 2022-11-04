const a = document.querySelector('#a');
const b = document.querySelector('#b');
const c = document.querySelector('#c');
const d = document.querySelector('#d');

const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function(){

    let srednia;
    srednia = ((Number(a.value) + Number(b.value) + Number(c.value) + Number(d.value))/4);
    let wynik_tekst =`
                        a = ${a.value} <br>
                        b = ${b.value} <br>
                        c = ${c.value} <br>
                        d = ${d.value} <br>
                        Średnia = ${srednia} <br>
                        Średnia zaokraglona = ${srednia.toFixed(3)}`
                        wynik.innerHTML = wynik_tekst;
                    });