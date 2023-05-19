const btn = document.querySelector('button');
const wynik = document.querySelector('#wynik');

btn.addEventListener('click', function(){
    wynik.innerHTML = `Cena strzyżenia:` ;
    let krotkie = document.querySelector('#krotkie').checked
    let srednie = document.querySelector('#srednie').checked
    let poldlugie = document.querySelector('#poldlugie').checked
    let dlugie = document.querySelector('#dlugie').checked
    if(krotkie) {
        wynik.innerHTML += ` 25`}
    else if(srednie) {
        wynik.innerHTML += ` 30`;
    }
    else if(poldlugie) {
        wynik.innerHTML += ` 40`;
    }
    else if(dlugie) {
        wynik.innerHTML += ` 50`;
    }
})