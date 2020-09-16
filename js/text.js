let color = document.getElementById("color")
let font = document.getElementById('font')
let display = document.getElementById('display')
let reset = document.getElementById('reset')
let paragraph = document.getElementById("zmiana")


function changeColor() {
    paragraph.style.color = "green";
}

function changeFont() {
    paragraph.style.fontSize = "40px";
}

function changeDisplay() {
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block"
    }
    else {
        paragraph.style.display = "none"
    }
}

function resetStyle() {
    paragraph.attributeStyleMap.clear()
}

color.addEventListener('click', changeColor)
font.addEventListener('click', changeFont)
display.addEventListener('click', changeDisplay)
reset.addEventListener('click', resetStyle)