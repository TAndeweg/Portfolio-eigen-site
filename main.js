//opdracht functions
function temperatuur() {
    let temp = prompt('Hoe warm is het?');

    if (temp <= 10) {
        alert('Het is koud.')
    } else if (temp > 10 && temp <= 16) {
        document.getElementById('temp-16').innerHTML = 'Het is niet warm, je kan beter een jas aandoen. '
    } else if (temp > 16 && temp < 24) {
        console.log('Het is niet koud en niet warm.')
    } else if (temp > 24 && temp < 30) {
        document.getElementById('temp-24').innerHTML = 'Je hoeft geen jas aan.'
    } else if (temp >= 30) {
        alert('Je kan beter insmeren')
    }
}

temperatuur();






