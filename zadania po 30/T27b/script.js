const btn = document.querySelector('#button')

btn.addEventListener('click', function () {

var letters = ['a', 'b', 'c', 'd', 'e'];

let tab = [
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""]

]
let IloscA = 0
let IloscB = 0
let BWiersze = [];

for (i = 0; i < 7; i++){
    IloscB = 0;
    for(j = 0; j<7; j ++){
        var letter = letters[Math.floor(Math.random() * letters.length)];
        tab[i][j] += letter
        if(letter === 'a'){
            IloscA++
        }
        if(tab[i][j] === 'b'){
            IloscB ++
        }
    }
    BWiersze[i] = IloscB;
}

wynik.innerHTML = ``
for (i = 0; i < 7; i++){
    for(j = 0; j<7; j ++){
        wynik.innerHTML += `${tab[i][j]} `
    }
    wynik.innerHTML += `<br>`
}
wynik.innerHTML += `Ilość liter A: ${IloscA}`

    let last = BWiersze[0];
    let Index = 0;
    for (let i = 1; i < BWiersze.length; i++) {
        if (BWiersze[i] > last) {
            Index = i;
            last = BWiersze[i];
        }
    }

wynik.innerHTML += `<br> Numer wiersza z największą ilością B: ${Index + 1}`;

})