const liczba_a = document.querySelector('#liczba_a')
const liczba_b = document.querySelector('#liczba_b')
const btn  = document.querySelector('button');
const wynik = document.querySelector('#wynik');

btn.addEventListener('click', function() {
    let x = parseInt(liczba_a.value)
    let y = parseInt(liczba_b.value)

    if(y===0)
    {
        wynik.innerHTML = 'Liczba A nie jest podzielna przez liczbę B - Nie dzielimy przez 0!'
    }
    else
    {
        if (x % y == 0)
        {
            wynik.innerHTML = 'Liczba A jest podzielna przez liczbę B'
        }
        else
        {
            wynik.innerHTML = 'Liczba A nie jest podzielna przez liczbę B'
        }
    }

})