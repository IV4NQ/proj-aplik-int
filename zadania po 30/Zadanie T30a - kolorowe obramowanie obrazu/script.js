const image = document.getElementById("framed-image");
const colorSelect = document.getElementById("color-select");

colorSelect.addEventListener("input", function() {
    const hue = this.value;
    image.style.borderColor = `hsl(${hue}, 100%, 50%)`;
});