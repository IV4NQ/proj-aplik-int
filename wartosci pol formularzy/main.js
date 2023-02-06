const form = document.querySelector("#myForm");

console.log(form.firstName.value);
form.lastName.value = "Kowalski";
form.message.value = "Treść";
console.log(form.subject.value);

form.subject.value = "zgloszenie";

console.log(form.remember.checked);

form.remember.checked = true;


const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');
btn.addEventListener('click', function (event) {
    event.preventDefault();

    wynik.innerHTML = `Imie: ${form.firstName.value} \
     <br>Nazwisko: ${form.lastName.value} \
     <br>Rodzaj: ${form.subject.value} \
     <br>Treść: ${form.message.value} \
     <br>zapamiętać cię? ${form.remember.checked}`
})