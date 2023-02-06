const liczba = document.querySelector('#liczba');
const btn  = document.querySelector('button');
const wynik = document.querySelector('#wynik');

btn.addEventListener('click', function() {
    let a = parseInt(liczba.value)

    if(a%4===0 && a%100!==0 || a%400===0){
        wynik.innerHTML = `Rok ${a} jest przęstępny`
    } else {
        wynik.innerHTML = `Rok ${a} nie jest przestępny`
    }

})