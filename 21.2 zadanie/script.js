const liczba = document.querySelector('#liczba')
const btn  = document.querySelector('button');
const wynik = document.querySelector('#wynik');

btn.addEventListener('click', function() {
    let a = parseInt(liczba.value)
    wynik.innerHTML="";
    for(i=1;i<=30;i++){
        wynik.innerHTML += `${i} `
     if(i===a) {
         break;
     }
     }


})