// Example for handling button clicks (if needed)
document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            menuItems.forEach(menu => menu.classList.remove("active"));
            item.classList.add("active");
        });
    });

    console.log("JavaScript is loaded!");
});
