

let wojownik = {
    nazwa: "Mieszko",
    punkty_doswiadczenia: 5,
    punkty_zycia: 0,
    uzbrojenie: "miecz",

    wyswietl: function() {
        console.log('nazwa: ' + this.nazwa + ` punkty doswiadczenia: ` + this.punkty_doswiadczenia
            + ' punkty_zycia: ' + this.punkty_zycia + ' uzbrojenie: ' + this.uzbrojenie);
    }
}
wojownik.wyswietl();

