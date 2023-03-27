function pokaz() {

    let pobierz = document.getElementById("wprowadzoneDane").value;

    let rozdziel = pobierz.split(" ");

    let imie = rozdziel[0].charAt(0).toUpperCase() + rozdziel[0].slice(1).toLowerCase();
    let nazwisko = rozdziel[1].charAt(0).toUpperCase() + rozdziel[1].slice(1).toLowerCase();

    document.getElementById("wynik").innerHTML = `Twoje imie to: ${imie}, a nazwisko: ${nazwisko}`
}