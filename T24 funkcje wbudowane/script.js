const btn  = document.querySelector('#button');
const wynik = document.querySelector('#wynik');
const wynik2 = document.querySelector('#wynik2');
const wynik3 = document.querySelector('#wynik3');
const wynik4 = document.querySelector('#wynik4');
const btn2  = document.querySelector('#button2');
const btn3  = document.querySelector('#button3');
const btn4  = document.querySelector('#button4');

document.forms[0].addEventListener("submit", function(event) {
    event.preventDefault();

    let data1 = new Date(document.getElementById("data1").value);
    let data2 = new Date(document.getElementById("data2").value);

    let diffInMilliseconds = Math.abs(data1 - data2);
    let diffInDays = Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24));

    document.getElementById("wynikdat").innerHTML = diffInDays + " dni";
});


btn.addEventListener('click', function() {
    let currentDate = new Date();
    wynik.innerHTML = currentDate

})
btn2.addEventListener('click', function() {
    let currentYear = new Date().getFullYear();
    wynik2.innerHTML = `Aktualny rok ${currentYear}`

})
btn3.addEventListener('click', function() {
    let currentMonth = new Date().getMonth();
    wynik3.innerHTML = `Aktualny miesiąc ${currentMonth +1}`
})
btn4.addEventListener('click', function() {
    let currentDay = new Date().getDate();
    wynik4.innerHTML = `Aktualny dzień ${currentDay}`
})