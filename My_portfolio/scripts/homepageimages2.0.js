const welcomeImage = document.getElementById("welcomeImage");
const welcomeImage2 = document.getElementById("welcomeImage2");

function changeImage() {
    welcomeImage2.style.opacity = "1";

    setTimeout(() => {
        welcomeImage2.style.opacity = "0";

        setTimeout(changeImage, 7000);
    }, 7000);
}

window.addEventListener('load', () => {
    setTimeout(changeImage, 5000);
});
