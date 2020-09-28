let images = [];
let i = 0;
let time = 1000;

let button1s = document.getElementById('button1');
let button2s = document.getElementById('button2');
let button3s = document.getElementById('button3');

images[0] = 'img/slajd1.jpg';
images[1] = 'img/slajd2.jpg';
images[2] = 'img/slajd3.jpg';
images[3] = 'img/slajd4.jpg';

button1s.addEventListener('click', function() {
    time = 1000
})
button2s.addEventListener('click', function() {
    time = 2000
})
button3s.addEventListener('click', function() {
    time = 3000
})

function swipe() {
    document.getElementById('slide').src = images[i];

    if (i < images.length - 1) {
        i++;
    }
    else {
        i = 0;
    }

    setTimeout(swipe, time);
}

window.onload = swipe;