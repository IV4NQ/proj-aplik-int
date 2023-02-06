const liczba_a = document.querySelector('#liczba_a');
const liczba_b = document.querySelector('#liczba_b');
const btn  = document.querySelector('button');
const wynik = document.querySelector('#wynik');

btn.addEventListener('click', function() {
    a = parseInt(liczba_a.value)
    b = parseInt(liczba_b.value)

    function potega(a, b) {
        let wynik = 1;
        for (let i = 1; i <= a; i++) {
            wynik = a ** b;
        }
        return wynik;
    }

    let out = potega(a, b)
    wynik.innerHTML = `${a} <sup> ${b} </sup> = ${out}`
})