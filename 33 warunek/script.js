const liczba_a = document.querySelector('#liczba_a')
const liczba_b = document.querySelector('#liczba_b')
const wynik = document.querySelector('#wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', function () {
    let a = parseInt(liczba_a.value)
    let b = parseInt(liczba_b.value)

    if(b===0)
    {
        wynik.innerHTML = 'Nie dzielimy przez zero!';
    }
    else
    {
        let iloraz = a/b;
        wynik.innerHTML = 'Iloraz liczb: ' +a+ ' oraz ' +b+ ' wynosi '+iloraz;
    }




})