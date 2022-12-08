const liczba = document.querySelector('#liczba');
const btn  = document.querySelector('button');
const wynik = document.querySelector('#wynik');

btn.addEventListener('click', function() {
    let a = parseInt(liczba.value)

    switch(true){
        case (a>=90 && a<=100):
            wynik.innerHTML = `${a}% to ocena: 5`; break;
        case (a>=80 && a<=89):
            wynik.innerHTML = `${a}% to ocena: 4,5`; break;
        case (a>=70 && a<=79):
            wynik.innerHTML = `${a}% to ocena: 4`; break;
        case (a>=60 && a<=69):
            wynik.innerHTML = `${a}% to ocena: 3,5`; break;
        case (a>=50 && a<=59):
            wynik.innerHTML = `${a}% to ocena: 3`; break;
        case (a>=1 && a<=50):
            wynik.innerHTML = `${a}% to ocena: 2`; break;
        default:
            wynik.innerHTML = `Dane zostaly źle wprowadzzone`; break;
    }


})