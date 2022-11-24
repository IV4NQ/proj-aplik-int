const wynik = document.querySelector('#wynik')
const btn = document.querySelector('#button')
const x = document.querySelector('#x')

btn.addEventListener('click', function () {

    let a = parseInt(x.value)

    wynik.innerHTML = `<h3>x = ${a}</h3>`

    let j
    for (let i = 0; i <= 10; i++) {
        j = a * i
        wynik.innerHTML = wynik.innerHTML + `<h4>${i} * ${a} = ${j}</h4>`
    }


})