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