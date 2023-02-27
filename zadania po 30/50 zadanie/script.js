const liczba_a = document.querySelector('#liczba_a');
const liczba_x = document.querySelector('#liczba_x');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let a = parseInt(liczba_a.value)
    let x = parseInt(liczba_x.value)

    if(a===x){
        wynik.innerHTML = `Nie można dzielić przez 0!!!`
    } else {
        let y = (a+x)/(a-x)
        wynik.innerHTML = `<h1> Wynik wynosi: ${y}</h1>`
    }


})