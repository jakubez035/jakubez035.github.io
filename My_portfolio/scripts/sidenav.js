document.addEventListener('DOMContentLoaded', function() {
    const names = ["MyHZ", "Learn", "HBO-ICT CER", "HBO-ICT IR", "GitHub"];
    links = ["https://portal.hz.nl/en/", 
        "https://learn.hz.nl/my/", 
        "https://oer.hz.nl/6978cdea-fb31-430b-9bf9-63206aa07754#111-course-and-examination-regulations", 
        "https://oer.hz.nl/6978cdea-fb31-430b-9bf9-63206aa07754#112-implementation-regulations", 
        "https://github.com/HZ-HBO-ICT"];

    const aside = document.querySelector("aside");

    const divider = document.createElement("div");

    names.forEach((element, index) => {
        const link = document.createElement("a");
        link.setAttribute("href", links[index]);
        link.setAttribute("target", "_blank");

        const linkText = document.createTextNode(element);
        link.appendChild(linkText);

        divider.appendChild(link);
    });

    aside.appendChild(divider);

    const dividerImage = document.createElement("div");
    const imageLink = document.createElement("a");
    imageLink.setAttribute("href", "https://hz.nl/")

    const image = document.createElement("img");
    
    const currentPath = window.location.pathname.split("/").pop();
    if (currentPath === "index.html") {
        image.setAttribute("src", "./images/hz-logo.png")
    } else {
        image.setAttribute("src", "../images/hz-logo.png")
    }

    imageLink.appendChild(image);

    dividerImage.appendChild(imageLink);

    aside.appendChild(dividerImage);

    
});

function toggleNav() {
    const nav = document.querySelector("aside");

    if (nav.style.transform === "translateX(0%)") {
        nav.style.transform = "translateX(-100%)"; 
    } else {
        nav.style.transform = "translateX(0%)";
    }
}

