document.addEventListener('DOMContentLoaded', function() {
    const alts = ["Instagram", "GitHub"];
    const links = ["https://www.instagram.com/jakub_holik/", "https://github.com/jakubez035"];

    const footer = document.querySelector("footer");

    const footerList = document.createElement("ul");

    const currentPath = window.location.pathname.split("/").pop();

    let images;

    /*Paths*/
    if (currentPath === "index.html") {
        images = ["./images/Instagram_Glyph_Gradient.svg", "./images/github-mark-white.svg"];
    } else {
        images = ["../images/Instagram_Glyph_Gradient.svg", "../images/github-mark-white.svg"];
    }

    /*Link and image creation*/
    images.forEach((element, index) => {
        const listItem = document.createElement("li");

        const link = document.createElement("a");
        link.setAttribute("href", links[index]);
        link.setAttribute("target", "_blank"); 

        const image = document.createElement("img");
        image.setAttribute("src", element);
        image.setAttribute("alt", alts[index]);
        image.style.width = "30px"; 

        link.appendChild(image);

        listItem.appendChild(link);

        footerList.appendChild(listItem);
    });

    /*Adds margin to last element so theres some space between images*/
    footerList.lastElementChild.style.marginLeft = "40px";

    footer.appendChild(footerList);

    const copyright = document.createElement("p");
    copyright.appendChild(document.createTextNode("Copyright © 2024 Jakub Holík"));
    footer.appendChild(copyright);
});