const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');
const liczba_a = document.querySelector('#liczba_a');
const liczba_b = document.querySelector('#liczba_b');
const liczba_c = document.querySelector('#liczba_c');


btn.addEventListener('click', function(){
    let a = parseInt(liczba_a.value);
    let b = parseInt(liczba_b.value);
    let c = parseInt(liczba_c.value);


    if ((a*a+b*b===c*c) || (a*a+c*c===b*b) || (c*c+b*b===a*a)) {
        wynik.innerHTML = `Trójkąt jest prostokątny`
    }
    else
    {
        wynik.innerHTML = `Trójkąt nie jest prostokątny`
    }
})