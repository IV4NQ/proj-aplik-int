class rycerz {
    nazwisko: "jakies";
    doswiadczenie: 4;
    uzbrojenie: "zbroja";

    zwrocInfo(){
        console.log(`Nazwisko: ${this.nazwisko} doswiadczenie ${this.doswiadczenie} uzbrojenie: ${this.uzbrojenie}`)
    }
    dodajUzbrojenie(zbrojenie){
        this.uzbrojenie += zbrojenie;
    }
}
rycerz = new Rycerz
Rycerz.dodajUzbrojenie("miecz")
Rycerz.zwrocInfo()