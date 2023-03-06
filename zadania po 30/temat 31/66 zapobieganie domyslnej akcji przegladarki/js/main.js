const form = document.querySelector("#myForm");
const link = document.querySelector("#showMessage");

form.addEventListener("submit", function(e) {
    if(e.currentTarget.firstName.value === "") {
        e.preventDefault();
        alert("Wpisz swoje imię!");
    }
});

form.querySelector("#firstName").addEventListener("keypress", function(e) {
    if(String.fromCharCode(e.charCode) === "a") {
        e.preventDefault();
    }
});

link.addEventListener("click", function(e) {
    e.preventDefault();

    const href = e.currentTarget.getAttribute("href"); // #message

    document.querySelector(href).style.display = "block";
});
