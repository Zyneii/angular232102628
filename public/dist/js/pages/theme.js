// Load theme saat halaman dibuka
document.addEventListener("DOMContentLoaded", function () {
    let theme = localStorage.getItem("bs-theme") || "light";

    document.documentElement.setAttribute("data-bs-theme", theme);

    let label = document.getElementById("bs-theme-label");
    if (label) {
        label.innerText = theme === "dark" ? "Light Mode" : "Dark Mode";
    }
});

// Toggle theme
function toggleBootstrapTheme() {
    let current = document.documentElement.getAttribute("data-bs-theme");
    let newTheme = current === "light" ? "dark" : "light";

    document.documentElement.setAttribute("data-bs-theme", newTheme);
    localStorage.setItem("bs-theme", newTheme);

    let label = document.getElementById("bs-theme-label");
    if (label) {
        label.innerText = newTheme === "dark" ? "Light Mode" : "Dark Mode";
    }
}
