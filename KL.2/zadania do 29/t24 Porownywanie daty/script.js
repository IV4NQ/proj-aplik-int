const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');
btn.addEventListener('click', function(){
    const uro = new Date(document.querySelector('#uro').value);
    const uro2 = new Date(document.querySelector('#uro2').value);
    const imie = document.querySelector('#imie').value;
    const imie2 = document.querySelector('#imie2').value;

    if (uro.getTime() < uro2.getTime())
    {
        wynik.innerHTML = `${imie} jest starszy`;
    }
    else if(uro.getTime() > uro2.getTime())
    {
        wynik.innerHTML = `${imie2} jest starszy`;
    }
    else
    {
        wynik.innerHTML = `${imie} i ${imie2} mają tyle samo lat`;
    }
})