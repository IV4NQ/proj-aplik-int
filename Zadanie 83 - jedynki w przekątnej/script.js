const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');
const liczba = document.querySelector('#liczba');

btn.addEventListener('click', function () {
    wynik.innerHTML = "";
    let a = parseInt(liczba.value)

    for(let i = 0;i<a;i++){
        for(let j =0;j<a;j++){
            if(i === j){
                wynik.innerHTML += `<b>1<b>`;
            } else {
                wynik.innerHTML += `0`;
            }
        }
        wynik.innerHTML += `<br>`;
    }
})