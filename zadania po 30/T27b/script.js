var letters = ['a', 'b', 'c', 'd', 'e'];

const tab = [
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""]

]
let IloscA = 0
for (i = 0; i < 7; i++){
    for(j = 0; j<7; j ++){
        var letter = letters[Math.floor(Math.random() * letters.length)];
        tab[i][j] += letter
        if(letter === 'a'){
            IloscA++
        }
    }
}
wynik.innerHTML = ``
for (i = 0; i < 7; i++){
    for(j = 0; j<7; j ++){
        wynik.innerHTML += `${tab[i][j]} `
    }
    wynik.innerHTML += `<br>`
}
wynik.innerHTML += `${IloscA}`
