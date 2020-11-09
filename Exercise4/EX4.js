function RGB_Width() {
    var Border_colorRed = document.getElementById("Border_red").value,
        Border_colorGreen = document.getElementById("Border_green").value,
        Border_colorBlue = document.getElementById("Border_blue").value,

        BG_colorRed = document.getElementById("BGcolor_red").value,
        BG_colorGreen = document.getElementById("BGcolor_green").value,
        BG_colorBlue = document.getElementById("BGcolor_blue").value,

        Border_width = document.getElementById("Border_width").value;

    let colorDivWidth = document.getElementById("div");

    colorDivWidth.style.background = 'rgb(' + Border_colorRed + ',' + Border_colorGreen + ',' + Border_colorBlue + ')';
    colorDivWidth.style.borderColor = 'rgb(' + BG_colorRed + ',' + BG_colorGreen + ',' + BG_colorBlue + ')';

    colorDivWidth.style.borderWidth = Border_width + "px";
}
