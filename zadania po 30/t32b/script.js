const btn = document.querySelector('#button')
const wynik = document.querySelector('#wynik');


btn.addEventListener('click', function () {

    const dlugosc = document.querySelector('.dlugosc:checked').value;

    let cena;
    switch (dlugosc) {
        case 'krotkie':
            cena = 25;
            break;
        case 'srednie':
            cena = 30;
            break;
        case 'poldlugie':
            cena = 40;
            break;
        case 'dlugie':
            cena = 50;
            break;
        default:
            cena = 0;
    }
    wynik.innerHTML = `Cena strzyżenia wynosi: ${cena}`;
})


