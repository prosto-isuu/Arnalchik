const photo1Btn = document.querySelector('#photo1');
const photo2Btn = document.querySelector('#photo2');
const photo1 = document.querySelector('.albom-1');
const photo2 = document.querySelector('.albom-2');

function onChange1Photo() {
    const img = photo1.querySelector('img');
    if (img) {
        const imageAttribute = img.getAttribute('src');
        if (imageAttribute === './images/photo-1.jpeg') {
            img.setAttribute('src', './images/1.jpg');
        } else {
            img.setAttribute('src', './images/photo-1.jpeg');
        }
    }
}

photo1Btn.onclick = onChange1Photo; // Pass the function reference without parentheses
