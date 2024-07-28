document.addEventListener("DOMContentLoaded", function() {
    const toggler = document.querySelector(".nav-toggler");
    const navList = document.querySelector(".navlist ul");

    toggler.addEventListener("click", function() {
        navList.classList.toggle("show");
    });
});



