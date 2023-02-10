const liczba_a = document.querySelector('#liczba_a');
const liczba_b = document.querySelector('#liczba_b');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let a = parseInt(liczba_a.value)
    let b = parseInt(liczba_b.value)

    if (a % 2 === 0 && b % 2 === 0) {
        if(a > b){
            wynik.innerHTML = `Liczba a jest większa od b`
        } else if (b > a) {
            wynik.innerHTML = `Liczba b jest większa od liczby a`
        } else {
            wynik.innerHTML = `Liczby są równe`
        }
    } else if (a % 2 === 0 && b % 2 !== 0) {
        wynik.innerHTML = `Liczba b jest nieparzysta`
    } else if (a % 2 !== 0 && b % 2 === 0) {
        wynik.innerHTML = `Liczba a jest nieparzysta`
    } else if (a % 2 !== 0 && b % 2 !== 0) {
        wynik.innerHTML = `Obydwie liczby są nieparzyste`
    }


})