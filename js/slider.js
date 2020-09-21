let images = [];
let i = 0;
let time = 2000;

images[0] = '../img/slajd1.jpg';
images[1] = '../img/slajd2.jpg';
images[2] = '../img/slajd3.jpg';
images[3] = '../img/slajd4.jpg';

function swipe() {
    document.getElementByID('slide').src = images[i];

    if (i < images.length - 1) {
        i++;
    }
    else {
        i = 0;
    }

}
setTimeout(swipe, time);