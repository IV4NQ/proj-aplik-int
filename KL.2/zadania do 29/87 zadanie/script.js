const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');
const liczba = document.querySelector('#liczba');


btn.addEventListener('click', function(){
    let x = parseInt(liczba.value);
    let wyn = 0;
    wynik.innerHTML = ``;
    for(let i=1; i<=x; i++){
        wyn += i;
        if(i!==x) {
            wynik.innerHTML += ` ${i} +`
        } else {
            wynik.innerHTML += ` ${i}`;
        }
    }
    wynik.innerHTML += ` = ${wyn}`

})