const liczba_a = document.querySelector('#liczba_a');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let a = parseInt(liczba_a.value)

    wynik.innerHTML = ``
    for(let i = a; i>0; i--){
        for(let j = 0; j<i; j++) {
            wynik.innerHTML += `X`
        }
        wynik.innerHTML += `<br>`
    }

})