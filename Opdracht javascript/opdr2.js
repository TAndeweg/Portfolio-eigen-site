let randomNumber = prompt('Kies een getal tussen de 1 en de 10.');

function cijfers(randomNumber) {
    if (randomNumber <= 5.5) {
        document.getElementById('cijfer').innerHTML = 'Je hebt een onvoldoende gehaald.';
    } else if (randomNumber >= 5.5 && randomNumber <= 10) {
        document.getElementById('cijfer').innerHTML = 'Je hebt een voldoende gehaald.';
    } else {
        alert('Dit getal kan niet selecteer het opnieuw')
    }
}

cijfers(randomNumber)