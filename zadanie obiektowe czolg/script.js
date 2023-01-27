class Czolg {
    nazwa = "Leopard";
    kolor = "Niebieski";
    Ammunicja = 7;

    info = function ()
    {
        document.write(`Jestem czołgiem i nazywam się ${this.nazwa}. Mój kolor to: ${this.kolor}. Mam aktualnie ${this.Ammunicja} amunicji<br>`)
    }

    koloruj = function (nowyKolor)
    {
        document.write(`Czołg został przemalowany na kolor ${nowyKolor} z ${this.kolor}`)
        this.kolor = nowyKolor;
    }

    strzal = function ()
    {
        if (this.Ammunicja >= 1)
        {
            document.write("Czołg wystrzelił jeden pocisk! <br>");
            this.Ammunicja--;
        }
        else
        {
            document.write("Czołg nie może wystrzelić ze względu na brak amunicji. Doładuj i spróbuj ponownie! <br>");
        }
    }
    doladuj = function (iloscAmunicjiDoladowanej)
    {
        this.Ammunicja = iloscAmunicjiDoladowanej + 1;
        document.write(`Ilość amunicji w czołgu wzrosła z ${this.Ammunicja} na ${this.Ammunicja + iloscAmunicjiDoladowanej} <br>`)

    }
}

let czolg = new Czolg();

czolg.info();
czolg.strzal();
czolg.info();
czolg.strzal();
czolg.info();
czolg.doladuj();
czolg.info()
czolg.koloruj("rozowy");
