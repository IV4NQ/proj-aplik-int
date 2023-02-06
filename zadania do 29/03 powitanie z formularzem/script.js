const imie = document.querySelector('#imie');
const wiek = document.querySelector('#wiek');
const wynik = document.querySelector('#wynik');
const wynik2 = document.querySelector('#wynik2');
const btn = document.querySelector('button');

btn.addEventListener('click', 
    function(){
        let wynik_tekst = `<h1> Cześć ${imie.value} .Miło cię widzieć, szczególnie, że masz ${wiek.value} lat</h1>`;
            wynik.innerHTML = wynik_tekst;
            console.log (`Cześć ${imie.value} tak na prawde wcale się nie cieszę`);
    }
);