let image = document.getElementById('main-image');
const images = [
    './Images/Cart.png',
    './Images/Logo.png',
    './Images/Main image1.png'
]

let i = 0;

function changeImage(){
    if(i < images.length){
        image.src = images[i];
        i++;
    }
    if(i === images.length){
        i = 0;
    }
}

setInterval(() => changeImage(), 5000);