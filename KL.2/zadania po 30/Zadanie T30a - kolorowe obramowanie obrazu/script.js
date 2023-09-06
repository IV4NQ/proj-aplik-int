const image = document.getElementById("framed-image");
const colorSelect = document.getElementById("color-select");
const colorPicker = document.getElementById("color-picker");

colorSelect.addEventListener("input", function() {
    const hue = this.value;
    image.style.borderColor = `hsl(${hue}, 100%, 50%)`;
});

colorPicker.addEventListener("input", function() {
    image.style.borderColor = this.value;
});