function setup() {
    createCanvas(1000, 1000);
}

function draw() {

    if (mouseIsPressed) {
        fill(0);
    } else {
        fill(255);
    }
    quad(mouseX, mouseY, 86, 20, 69, 63, 30, 76);
    ellipse(mouseX, mouseY, 80, 80);
    fill(155)
    rect(mouseX, mouseY, 40, 40)
    arc(50, 55, 50, 50, 0, HALF_PI);
    noFill();
    arc(50, 55, 60, 60, HALF_PI, PI);
    arc(50, 55, 70, 70, PI, PI + QUARTER_PI);
    arc(50, 55, 80, 80, PI + QUARTER_PI, TWO_PI);


}