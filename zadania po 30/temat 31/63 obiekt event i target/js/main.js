const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");

btn2.addEventListener("click", function(e) {
    e.target.setAttribute("disabled", true);
});

btn3.addEventListener("click", function(e) {
    e.currentTarget.setAttribute("disabled", true);
});

document.body.addEventListener("click", function(e) {
    if(e.target.classList.contains("button")) {
        console.log("Kliknąłeś z przycisk!");
    }
});

btn4.addEventListener("click", e => {
    console.log(this === e.target);
});
