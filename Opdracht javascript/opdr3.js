let randomNumber = prompt('Kies een getal');

function numbers(randomNumber) {

    let even = false;

    if (randomNumber % 2 == 0) {
        even = true;
    }

    if (even == true) {
        document.getElementById('numberOutput').innerHTML = 'Dit getal is even';
    }

    else {
        document.getElementById('numberOutput').innerHTML = 'Dit getal is oneven';
    }

}

numbers(randomNumber)