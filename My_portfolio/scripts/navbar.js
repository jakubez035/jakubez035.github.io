document.addEventListener('DOMContentLoaded', function() {
    const names = ["Home", "Profile", "Dashboard", "FAQ", "Blog"];

    const header = document.querySelector("header");
    header.setAttribute("class", "navbar");

    const headerNav = document.createElement("nav");
    headerNav.setAttribute("class", "menu");

    const menuButton = document.createElement("button");
    menuButton.setAttribute("class", "menu-icon");
    menuButton.setAttribute("onclick", "toggleNav()");
    
    const buttonText = document.createTextNode("JH");
    menuButton.appendChild(buttonText);

    const headerList = document.createElement("ul");

    const currentPath = window.location.pathname.split("/").pop();

    let subSites;

    if (currentPath === "index.html") {
        subSites = ["index.html", "./src/profile.html", "./src/dashboard.html", "./src/faq.html", "./src/blog.html"];
    } else {
        subSites = ["../index.html", "profile.html", "dashboard.html", "faq.html", "blog.html"];
    }

    names.forEach((element, index) => {
        const listItem = document.createElement("li");

        const link = document.createElement("a");
        link.setAttribute("href", subSites[index]);

        const linkText = document.createTextNode(element);
        link.appendChild(linkText);

        listItem.appendChild(link);
        headerList.appendChild(listItem);
    });

    headerNav.appendChild(menuButton); 
    headerNav.appendChild(headerList); 

    header.appendChild(headerNav);
});

document.addEventListener('DOMContentLoaded', function () {
    const currentPath = window.location.pathname.split("/").pop();

    const navLinks = document.querySelectorAll('.navbar a');

    navLinks.forEach(function (link) {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});