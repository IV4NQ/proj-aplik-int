let wojownik = {
    nazwa: "Mieszko",
    punkty_doswiadczenia: 5,
    punkty_zycia: 0,
    uzbrojenie: "miecz",

    wyswietl: function () {
        console.log('nazwa: ' + this.nazwa + ` punkty doswiadczenia: ` + this.punkty_doswiadczenia
            + ' punkty_zycia: ' + this.punkty_zycia + ' uzbrojenie: ' + this.uzbrojenie);
    },

    wojownikInfoZwroc() {
        return console.log('nazwa: ' + this.nazwa + ` punkty doswiadczenia: ` + this.punkty_doswiadczenia
            + ' punkty_zycia: ' + this.punkty_zycia + ' uzbrojenie: ' + this.uzbrojenie)
    },

    wojownikInfoStrona() {
        return document.write('nazwa: ' + this.nazwa + ` punkty doswiadczenia: ` + this.punkty_doswiadczenia
            + ' punkty_zycia: ' + this.punkty_zycia + ' uzbrojenie: ' + this.uzbrojenie)
    }
}
wojownik.wyswietl();
wojownik.wojownikInfoZwroc();
const btn  = document.querySelector('button');
btn.addEventListener('click', function() {

    wojownik.wojownikInfoStrona();
})
