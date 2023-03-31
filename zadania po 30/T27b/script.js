

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
        if(letter === 'b'){
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

    let max = tab[0];
    let Index = 0;
    for (let i = 1; i < tab.length; i++) {
        if (tab[i] > max) {
            Index = i;
            max = tab[i];
        }
    }

wynik.innerHTML += `<br> Numer wiersza z największą ilością B: ${Index + 1}`;

