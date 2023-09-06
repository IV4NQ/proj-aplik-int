const liczba_a = document.querySelector('#liczba_a');
const liczba_b = document.querySelector('#liczba_b');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let a = parseInt(liczba_a.value)
    let b = parseInt(liczba_b.value)

    wynik.innerHTML = ``
    for (let i = a; i <= b; i++){
        if(i!==b) {
            wynik.innerHTML += `${i};`
        } else {
            wynik.innerHTML += `${i}`
        }
    }

        })