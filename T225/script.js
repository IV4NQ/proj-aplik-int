const liczba_a = document.querySelector('#liczba_a');
const liczba_b = document.querySelector('#liczba_b');
const btn  = document.querySelector('button');
const wynik = document.querySelector('#wynik');

btn.addEventListener('click', function() {
    let a = parseInt(liczba_a.value)
    let b = parseInt(liczba_b.value)
    NWD(a,b);
    function NWD(a,b)
    {
        while(a!==b)
            if(a>b) {
                a -= b; //lub a = a - b;
            }else{
                b-=a; //lub b = b-a
        wynik.innerHTML = a; // lub b - obie zmienne przechowują wynik NWD(a,b)
    }

    }


})
