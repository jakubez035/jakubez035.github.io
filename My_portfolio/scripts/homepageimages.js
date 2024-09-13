const images = [
    "https://www.chromethemer.com/download/hd-wallpapers/galaxy-3840x2160.jpg",
    "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D"
];

const welcomeImage = document.getElementById("welcomeImage");

let currentIndex = 0;

function changeImage() {

    welcomeImage.style.opacity = "0.85";
    welcomeImage.style.opacity = "0"

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;
        welcomeImage.src = images[currentIndex];

        welcomeImage.style.opacity = "0";
        welcomeImage.style.opacity = "0.85";
    }, 1500);
}

window.addEventListener('load', () => {
    setTimeout(() => {
        changeImage();
        setInterval(changeImage, 7000);
    }, 5000);
});