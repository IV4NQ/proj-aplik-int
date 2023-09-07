const wyslij = document.querySelector('#wyslij')
const wynik = document.querySelector('#wynik')

wyslij.addEventListener('click', function (event) {
    event.preventDefault()
const imie = document.querySelector('#imie').value
const nazwisko = document.querySelector('#nazwisko').value
const Email = document.querySelector('#Email').value.toLowerCase()
const usluga = document.querySelector('#usluga').value

    wynik.innerHTML = ``
    wynik.innerHTML += `Imie i nazwisko: ${imie} ${nazwisko}`
    wynik.innerHTML += `<br> Email: ${Email}`
    wynik.innerHTML += `<br> Usługa: ${usluga}`
})