function toggleNav() {
    const nav = document.getElementById("side-nav");

    // Check if the sidebar is already open or closed
    if (nav.style.transform === "translateX(0%)") {
        nav.style.transform = "translateX(-100%)"; // Close the sidebar
    } else {
        nav.style.transform = "translateX(0%)"; // Open the sidebar
    }
}


// This will add target="_blank" to all <a> tags inside the #side-nav element
document.querySelectorAll('#side-nav a').forEach(function(anchor) { //Anchor is an anonymous function
    anchor.setAttribute('target', '_blank');
});


document.addEventListener('DOMContentLoaded', function () {
    // Get the current page's pathname, making sure to get only the last part of the URL
    const currentPath = window.location.pathname.split("/").pop();

    // Select all anchor tags within the navbar
    const navLinks = document.querySelectorAll('.navbar a');

    // Loop through each nav link
    navLinks.forEach(function (link) {
        // Compare the href attribute's last part (page name) with the current path
        if (link.getAttribute('href') === currentPath) {
            // Add the 'active' class if it matches
            link.classList.add('active');
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const alts = ["Instagram", "GitHub"];
    const links = ["https://www.instagram.com/jakub_holik/", "https://github.com/jakubez035"];

    const footer = document.querySelector("footer");

    const footerList = document.createElement("ul");

    const currentPath = window.location.pathname.split("/").pop();

    let images;

    if (currentPath === "index.html") {
        images = ["./images/Instagram_Glyph_Gradient.svg", "./images/github-mark-white.svg"];
    } else {
        images = ["../images/Instagram_Glyph_Gradient.svg", "../images/github-mark-white.svg"];
    }

    
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

    footerList.lastElementChild.style.marginLeft = "40px";

    footer.appendChild(footerList);

    const copyright = document.createElement("p");
    copyright.appendChild(document.createTextNode("Copyright © 2024 Jakub Holík"));
    footer.appendChild(copyright);
});


