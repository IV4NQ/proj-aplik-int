const btn = document.querySelector('#button')
const wynik = document.querySelector('#wynik')

btn.addEventListener('click', function () {

    const ocena = document.querySelector('#ocena').value
    const data = new Date(document.querySelector('#data').value)
    const kolor = document.querySelector('#kolor').value

    const formattedDate = data.toLocaleDateString('pl-PL')

    wynik.innerHTML = `
  Usługę wykonano: ${formattedDate} <br><br>
  Ocena klienta: ${ocena} <br><br>
  Ocena kolorem: <span style="color: ${kolor}">ocena kolorem</span>
`
})