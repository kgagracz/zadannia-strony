let checkButton = document.getElementById('check');
function przedzial() {


    let inputNumber1 = document.getElementById('number1');
    let inputNumber2 = document.getElementById('number2');

    let wynik = "";

    for (i = inputNumber1.value; i<= inputNumber2.value; i++) {
        wynik = wynik + i + " ";
    }
    document.getElementById('info').innerHTML = wynik;
}

checkButton.addEventListener('click', przedzial)