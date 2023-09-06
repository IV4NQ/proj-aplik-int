const liczba_a = document.querySelector('#liczba_a');
const liczba_b = document.querySelector('#liczba_b');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let a = parseInt(liczba_a.value)
    let b = parseInt(liczba_b.value)

    if(a>b)
    {
    wynik.innerHTML= 'Zmienna a jest większa od zmiennej b.';
    }
    else
    {
        if(a<b)
        {
        wynik.innerHTML='Zmienna a jest mniejsza od zmiennej b.';
        }
        else
        {
        wynik.innerHTML='Zmienna a jest  równa zmiennej b.';
        }
    }
})