
let tablica = [];
for (let i = 0; i < 7; i++) {
    tablica[i] = [];
}

// Funkcja losująca unikalne liczby całkowite z zakresu <10,99>
function losujLiczbe(liczby) {
    const index = Math.floor(Math.random() * liczby.length);
    const liczba = liczby[index];
    liczby.splice(index, 1);
    return liczba;
}

// Lista liczb całkowitych od 10 do 99
let liczby = Array.from({length: 90}, (_, i) => i + 10);
// Wypełnienie tablicy unikalnymi liczbami całkowitymi

for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 7; j++) {
        // Wylosowanie liczby z listy i usunięcie jej z listy, aby się nie powtórzyła
        const liczba = losujLiczbe(liczby);
        tablica[i][j] = liczba;
    }
}

// Wyświetlenie tablicy z zachowaniem wierszy i kolumn
for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 7; j++) {
        document.write(tablica[i][j] + " ");
    }
    document.write("<br>");
}