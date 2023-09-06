const a = document.querySelector('#a');
const b = document.querySelector('#b');

const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function(){


    let iloraz;
    if(Number(b.value)===0 || Number(a.value)===0)
    {
        wynik.innerHTML = "Nie dzielimy przez zero";
    }
    else
    {
        iloraz = (Number(a.value) / Number(b.value));
        wynik.innerHTML = `
                        a = ${a.value} <br>
                        b = ${b.value} <br>
                        Iloraz = ${iloraz} <br>
                        iloraz do 2 liczb po przecinku = ${iloraz.toFixed(2)}`;
    }
});