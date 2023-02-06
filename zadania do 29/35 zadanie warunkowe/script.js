const liczba_a1 = document.querySelector('#liczba_a1');
const liczba_a2 = document.querySelector('#liczba_a2');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let a1 = parseInt(liczba_a1.value)
    let a2 = parseInt(liczba_a2.value)
    let wyn = a1*a2
    if(wyn===-1)
    {
        wynik.innerHTML = 'Proste są prostopadłe'
    }
    else
    {
        wynik.innerHTML = 'Proste nie są prostopadłe'
    }
})