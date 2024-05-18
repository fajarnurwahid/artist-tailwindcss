// start: Navbar
(function () {
    document.querySelectorAll("[data-toggle-navbar]").forEach(function (el) {
        el.addEventListener("click", function (e) {
            e.preventDefault();
            const navbar = document.querySelector("[data-navbar]");
            navbar.classList.add("navbar-mobile-shown");
        });
    });
    document.querySelectorAll("[data-dismiss-navbar]").forEach(function (el) {
        el.addEventListener("click", function (e) {
            e.preventDefault();
            const navbar = document.querySelector("[data-navbar]");
            navbar.classList.remove("navbar-mobile-shown");
        });
    });
})();
// end: Navbar
