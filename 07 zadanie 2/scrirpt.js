const liczba_a = document.querySelector('#liczba_a');
const liczba_b = document.querySelector('#liczba_b');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('#button');

btn.addEventListener('click', function (){
    let a = parseInt(liczba_a.value);
    let b = parseInt(liczba_b.value);
    let suma = a+b;
    let wynik_tekst = '';
   wynik_tekst += `Suma liczb ${a} i ${b} wynosi ${suma} <br>`;
    let roznica = a-b;
    wynik_tekst += `Roznica liczb ${a} i ${b} wynosi ${roznica} <br>`;
    let iloczyn = a*b;
    wynik_tekst += `Iloczyn liczb ${a} i ${b} wynosi ${iloczyn} <br>`;
    if(b===0){
        wynik_tekst += `Nie dzielimy przez zero <br> `
    } else {
        let iloraz = Math.floor(a/b);
        wynik_tekst += `Iloraz liczb ${a} i ${b} wynosi ${iloraz} <br>`;
        let reszta = a%b
        wynik_tekst += `Reszta liczb ${a} i ${b} wynosi ${reszta} <br>`;
    }
wynik.innerHTML = wynik_tekst;

})