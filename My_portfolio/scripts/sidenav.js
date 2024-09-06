function toggleNav() {
    const nav = document.getElementById("side-nav");

    // Check if the sidebar is already open or closed
    if (nav.style.transform === "translateX(0%)") {
        nav.style.transform = "translateX(-100%)"; // Close the sidebar
    } else {
        nav.style.transform = "translateX(0%)"; // Open the sidebar
    }
}
