const body = document.body;
const btn = document.querySelector("#btn");

body.addEventListener("click", function(e) {

    console.log("Kliknąłeś w body");

}, true);

body.addEventListener("click", function(e) {

    console.log("Kliknąłeś w body ponownie");

});

btn.addEventListener("click", function(e) {

    e.stopPropagation();

    console.log("Kliknąłeś przycisk");

});
