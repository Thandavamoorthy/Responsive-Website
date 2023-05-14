const toggleBtn = document.querySelector(".toggle-btn");
const menu = document.querySelector(".menu");
const navLink = document.querySelectorAll(".nav-links");
const body = document.getElementsByTagName("body");

toggleBtn.addEventListener("click", function () {
    menu.classList.toggle("toggle");
})

navLink.forEach(e => e.addEventListener("click", function () {
    menu.classList.remove("toggle");
}))

