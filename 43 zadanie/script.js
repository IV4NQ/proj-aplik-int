const liczba = document.querySelector('#liczba');
const btn  = document.querySelector('button');
const wynik = document.querySelector('#wynik');

btn.addEventListener('click', function() {
    let a = parseInt(liczba.value)

    if(a>0 && a<10)
    {
        wynik.innerHTML = `Liczba jest całkowita, jednocyfrowa`
    }
    else
    {
        if (a%2===0){
            wynik.innerHTML = `Liczba jest całkowita, dwucyfrowa i parzysta`
        }
        else {
            wynik.innerHTML = `Liczba jest całkowita, dwucyfrowa i nieparzysta`
        }
    }
})