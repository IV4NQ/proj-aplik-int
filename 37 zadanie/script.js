const btn  = document.querySelector('button');
const wynik = document.querySelector('#wynik');
const liczba_a = document.querySelector('#liczba_a')


btn.addEventListener('click', function() {
    let x = parseInt(liczba_a.value)


    if (x>0)
    {
        wynik.innerHTML = `Wartość bezwzględna to: ${x} `
    }
    else
    {
        let bezw = x * (-1);
        wynik.innerHTML = `Wartość bezwzględna to: ${bezw}`
    }


})