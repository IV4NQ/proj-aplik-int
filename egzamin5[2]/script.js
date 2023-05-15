btn = document.querySelector('#ButtonPromocje')
wynik = document.querySelector('#promocjaOutput')

btn.addEventListener('click', function (){

    const krotkie = document.querySelector('#krotkie').checked
    const srednie = document.querySelector('#srednie').checked
    const poldlugie = document.querySelector('#poldlugie').checked
    const dlugoie = document.querySelector('#dlugoie').checked
    if(krotkie == true){
        wynik.innerHTML = `15`
    }
})