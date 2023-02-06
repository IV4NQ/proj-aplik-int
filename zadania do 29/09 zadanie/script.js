const btn = document.querySelector('button')
const wynik = document.querySelector('#wynik')

let a,b

btn.addEventListener('click', function() {
    a = Number(document.querySelector('#cal').value)
    b = 25.3995 * a

    if(isNaN(a)){
        wynik.innerHTML = `<h1 id="wyn">Nie podałeś liczby</h1>`
    }else {
        wynik.innerHTML = `<h1 id="wyn">${a} cali to:<br>
            ${b} mm<br>
        </h1>`
    }
    })