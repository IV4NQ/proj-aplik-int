const liczba = document.querySelector('#liczba');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let a = parseInt(liczba.value)
    wynik.innerHTML = ``
    if(a>=10){
        if(a%2===0){
            wynik.innerHTML = `Liczba ${a} jest dwucyfrowa oraz parzysta`
        } else {
            wynik.innerHTML = `Liczba ${a} jest dwuzyfrowa ale nie parzysta`
        }
    } else {
        wynik.innerHTML = `Liczba nie spełnia wymagań`
    }

})