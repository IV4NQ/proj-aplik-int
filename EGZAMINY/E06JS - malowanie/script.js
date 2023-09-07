btn = document.querySelector('#policzButton')
wynik = document.querySelector('#wynik')

btn.addEventListener('click', function (){

    let ilosc = document.querySelector('#powierzchniaInput').value
    let oblicz = ilosc/4

        wynik.innerHTML = `Liczba potrzebnych puszek: ${Math.ceil(oblicz)}`

})