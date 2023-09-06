const liczba_a = document.querySelector('#liczba_a');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let a = parseInt(liczba_a.value)
    let tab = [1,2,3,4,5,6,7,8,9,10]

    wynik.innerHTML = ``
    for(let i = a; i<tab.length; i++){
        wynik.innerHTML += `${tab[i]}`
    }

})