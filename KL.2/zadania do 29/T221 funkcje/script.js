const liczba_a = document.querySelector('#liczba_a');
const btn  = document.querySelector('button');
const wynik = document.querySelector('#wynik');

btn.addEventListener('click', function() {
    a = parseInt(liczba_a.value)
// T221
// ----- Wartosc bezwzgledna sposob 1 -----
    function wartosc_bezwzgledna_1(x) {
        if (x > 0) {
            return x;
        } else {
            return x * (-1);
        }
    }

// ----- Wartosc bezwzgledna sposob 2 -----
    function wartosc_bezwzgledna_2(x) {
        let wynik = (x > 0) ? x : -x;
        return wynik;
    }

// ------------

    function zwieksz(x) {
        x = x + 1;
        document.write(x + "<br>");
    }

    document.write('wartosc bezwzgledna sposob 1: <br>')
    document.write(wartosc_bezwzgledna_1(a) + "<br>")
    document.write('wartosc bezwzgledna sposob 2: <br>')
    document.write(wartosc_bezwzgledna_2(a) + "<br>")
    document.write('zwieksz: <br>')
    document.write(zwieksz(a))
})