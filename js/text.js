let color = document.getElementById("color");
let font = document.getElementById('font');
let display = document.getElementById('display');
let reset = document.getElementById('reset');
let paragraph = document.getElementById("zmiana");


function changeColor() {
    let userColor = prompt('Wpisz kolor predefiniowany (green, red, itd)');
    paragraph.style.color = userColor;
}

function changeFont() {
    let userFont = prompt('Wpisz rozmiar czcionki');
    paragraph.style.fontSize = userFont +'px';
}

function changeDisplay() {
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
    }
    else {
        paragraph.style.display = "none";
    }
}

function resetStyle() {
    paragraph.attributeStyleMap.clear();
}

color.addEventListener('click', changeColor);
font.addEventListener('click', changeFont);
display.addEventListener('click', changeDisplay);
reset.addEventListener('click', resetStyle);