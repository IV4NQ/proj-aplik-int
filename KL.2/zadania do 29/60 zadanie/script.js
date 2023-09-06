const liczba = document.querySelector('#liczba');
const btn  = document.querySelector('button');
const wynik = document.querySelector('#wynik');

btn.addEventListener('click', function() {
    let a = parseInt(liczba.value)

    switch(a){
        case 1:
            wynik.innerHTML = `Dzień tygodnia nr 1 to Poniedziałek`; break;
        case 2:
            wynik.innerHTML = `Dzień tygodnia nr 2 Wtorek`; break;
        case 3:
            wynik.innerHTML = `Dzień tygodnia nr 3 Środa`; break;
        case 4:
            wynik.innerHTML = `Dzień tygodnia nr 4 Czwartek`; break;
        case 5:
            wynik.innerHTML = `Dzień tygodnia nr 5 Piątek`; break;
        case 6:
            wynik.innerHTML = `Dzień tygodnia nr 6 Sobota`; break;
        case 7:
            wynik.innerHTML =  `Dzień tygodnia nr 7 Niedziela`; break;
        default:
            wynik.innerHTML = `Nie ma takiego dnia tygodnia`; break;
    }


})