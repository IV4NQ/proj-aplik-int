const liczba = document.querySelector('#liczba');
const btn  = document.querySelector('button');
const wynik = document.querySelector('#wynik');

btn.addEventListener('click', function() {
    let a = parseInt(liczba.value)
    wynik.innerHTML = miesiace(a)

function miesiace(a) {
    switch (a) {
        case 1:
            a = `Miesiąc nr 1 to Styczeń`;
            break;
        case 2:
            a = `Miesiąc nr 2 Luty`;
            break;
        case 3:
            a = `Miesiąc nr 3 Marzec`;
            break;
        case 4:
            a = `Miesiąc nr 4 Kwiecień`;
            break;
        case 5:
            a = `Miesiąc nr 5 Maj`;
            break;
        case 6:
            a = `Miesiąc nr 6 Czerwiec`;
            break;
        case 7:
            a = `Miesiąc nr 7 Lipiec`;
            break;
        case 8:
            a = `Miesiąc nr 8 Sierpeiń`;
            break;
        case 9:
            a = `Miesiąc nr 9 Wrzesień`;
            break;
        case 10:
            a = `Miesiąc nr 10 Pazdziernik`;
            break;
        case 11:
            a = `Miesiąc nr 11 Listopad`;
            break;
        case 12:
            a = `Miesiąc nr 12 Grudzień`;
            break;
        default:
            a = `Nie ma takiego miesiąca`;
            break;
    }
    return a;
}


})