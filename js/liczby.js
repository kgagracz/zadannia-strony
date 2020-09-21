let inputNumber = document.getElementById('number');
let checkButton = document.getElementById('check');

function checkNumber() {
    let number = inputNumber.value
    let infoParagraph = document.getElementById('info')

    if (number > 0)  {
        infoParagraph.innerHTML = 'Wpisana liczba jest dodatnia. '
    } else if (number < 0) {
        infoParagraph.innerHTML = 'Wpisana liczba jest ujemna. '
    }
    else if (number == 0){
        infoParagraph.innerText = 'Liczba jest równa 0. '   
    }

    if ( number % 2 === 0) {
        infoParagraph.innerText += "Ta liczba jest podzielna przez dwa. " 
    }
    else infoParagraph.innerText += "Ta liczba nie jest podzielna przez dwa. "
}

checkButton.addEventListener('click', checkNumber)