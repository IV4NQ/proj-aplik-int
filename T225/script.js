const liczba_a = document.querySelector('#liczba_a');
const liczba_b = document.querySelector('#liczba_b');
const btn  = document.querySelector('button');
const wynik = document.querySelector('#wynik');

btn.addEventListener('click', function() {
    let a = parseInt(liczba_a.value)
    let b = parseInt(liczba_b.value)
sprawdz(a,b)
    function sprawdz(a,b){
        if(a>b){
            wynik.innerHTML =  ` Liczba a, która wynosi: ${a} jest większa od liczby b, która wynosi: ${b}`
        }
        else if(b>a) {
            wynik.innerHTML =  ` Liczba b, która wynosi: ${b} jest większa od liczby a, która wynosi:  ${a}`
        }
        else {
            wynik.innerHTML =  `Liczba a równa ${a} oraz liczba b równa ${b} są równe`
        }


    }




})