function sprawdzPlec() {
    var imie = document.getElementById("imie").value.toLowerCase();
    var ostatniaLitera = imie.charAt(imie.length - 1);

    if (ostatniaLitera === 'a' && imie !== "kuba" && imie !== "barnaba") {
        document.getElementById("wynik").innerHTML = "Jesteś kobietą.";
    } else {
        document.getElementById("wynik").innerHTML = "Jesteś mężczyzną.";
    }
}