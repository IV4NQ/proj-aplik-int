const btn = document.querySelector("button");
const rozmiar = document.querySelector("#liczba");
const plansza = document.querySelector("#plansza");
btn.addEventListener('click', function () {
    let rozm = parseInt(rozmiar.value);
    plansza.innerHTML = "";

    for (let szer = 0; szer < rozm; szer+=1)
    {
        for (let wys = 0; wys < rozm; wys+=1)
        {
            let dodaj = document.createElement("div");
            dodaj.style.width = (100 / rozm) + "%";
            dodaj.style.paddingBottom = (100 / rozm) + "%";
            dodaj.style.float = "left";

            if ((szer + wys) % 2 === 0)
            {
                dodaj.style.backgroundColor = "black";
            }
            else
            {
                dodaj.style.backgroundColor = "white";
            }
            plansza.appendChild(dodaj);
        }
    }

});