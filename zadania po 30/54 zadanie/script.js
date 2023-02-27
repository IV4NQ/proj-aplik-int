const liczba_a = document.querySelector('#liczba_a');
const liczba_b = document.querySelector('#liczba_b');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let a = parseInt(liczba_a.value)
    let b = parseInt(liczba_b.value)

    if(a>b){
        let x1 = Math.floor(a/b)
        wynik.innerHTML = `W liczbie A, liczba B mieści się ${x1} raz/y`
    } else
    {
        let x2 = Math.floor(b/a)
        wynik.innerHTML = `W liczbie B, liczba A mieści się ${x2} raz/y`
    }



})