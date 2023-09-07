const btn = document.querySelector('#GenerujPalete')

btn.addEventListener("click", function () {

    const InputKolor = document.querySelector('#InputKolor').value

    const Kolor1 = document.querySelector('#kolor1')
    const Kolor2 = document.querySelector('#kolor2')
    const Kolor3 = document.querySelector('#kolor3')
    const Kolor4 = document.querySelector('#kolor4')
    const Kolor5 = document.querySelector('#kolor5')

    Kolor1.style.background = `hsl( ${InputKolor}, 100%, 50% )`
    Kolor2.style.background = `hsl( ${InputKolor}, 80%, 50% )`
    Kolor3.style.background = `hsl( ${InputKolor}, 60%, 50% )`
    Kolor4.style.background = `hsl( ${InputKolor}, 40%, 50% )`
    Kolor5.style.background = `hsl( ${InputKolor}, 20%, 50% )`

})