const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");

function sayHello() {
    alert("Hej!");
}

btn2.onclick = sayHello;
btn2.onclick = function() {
    alert("Witaj!");
};

btn3.addEventListener("click", sayHello);
btn3.addEventListener("click", function() {
    alert("Witaj!");
});

btn2.onclick = null;

btn3.removeEventListener("click", sayHello);

