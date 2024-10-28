const images = [
    './assets/gallery.png',
    './assets/portrait.png'
];
let currentIndex = 0;

function showImage(index) {
    const carouselImage = document.querySelector('.carousel-image');
    const headingNo = document.getElementById('projectNo');
    carouselImage.src = images[index];
    headingNo.innerHTML = 'Project ' + (index + 1);
}

function prevImage() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    showImage(currentIndex);
}

function nextImage() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    showImage(currentIndex);
}

showImage(currentIndex);