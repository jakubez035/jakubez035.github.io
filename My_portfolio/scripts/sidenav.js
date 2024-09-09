function toggleNav() {
    const nav = document.getElementById("side-nav");

    // Check if the sidebar is already open or closed
    if (nav.style.transform === "translateX(0%)") {
        nav.style.transform = "translateX(-100%)"; // Close the sidebar
    } else {
        nav.style.transform = "translateX(0%)"; // Open the sidebar
    }
}

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
