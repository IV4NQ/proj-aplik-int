const podstawa = document.querySelector('#podstawa');
const wysokosc = document.querySelector('#wysokosc');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let a = parseInt(podstawa.value)
    let h = parseInt(wysokosc.value)

    let wyn = 0;
    wyn = ((a * h) / 2).toFixed(3)

    wynik.innerHTML = `Pole trójkąta wynosi: ${wyn}cm`
})