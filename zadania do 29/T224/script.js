const liczba_a = document.querySelector('#liczba_a');
const liczba_b = document.querySelector('#liczba_b');
const btn  = document.querySelector('button');
const wynik = document.querySelector('#wynik');

btn.addEventListener('click', function() {
    let a = parseInt(liczba_a.value)
    let b = parseInt(liczba_b.value)
sprawdz(a,b)
    function sprawdz(a,b){
        let kolor ='';
        if(a>b){
            wynik.innerHTML =  `<b id="black">  Liczba a, która wynosi:</b> <b id="red"> ${a} </b>  <b id="black"> jest większa od liczby b, która wynosi:</b> <b id="green">${b}</b>`
        }
        else if(b>a) {
            wynik.innerHTML =  ` <b id="black"> Liczba b, która wynosi:</b> <b id="red"> ${b} </b> jest większa od liczby a, która wynosi:  <b id="green">${a}</b>`
        }
        else {
            wynik.innerHTML =  `<b id="black"> Liczba a równa </b> <b id="blue">${a}</b> <b id="black"> oraz liczba b równa </b> <b id="blue"> ${b}</b> <b id="black"> są równe </b>`
        }


    }




})