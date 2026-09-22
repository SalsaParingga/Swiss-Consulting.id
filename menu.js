// ==============================
// MOBILE MENU
// ==============================

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.getElementById("navbar");

console.log("MENU BTN:", menuBtn);
console.log("NAVBAR:", navbar);

if (menuBtn && navbar) {

    menuBtn.addEventListener("click", function () {

        console.log("HAMBURGER DIKLIK!");

        alert("HAMBURGER KEKLIK!");

        navbar.classList.toggle("active");
        menuBtn.classList.toggle("active");

    });

    document.querySelectorAll("#navbar a").forEach(function(link) {

        link.addEventListener("click", function() {

            navbar.classList.remove("active");
            menuBtn.classList.remove("active");

        });

    });

} else {

    console.error("MENU BUTTON ATAU NAVBAR TIDAK DITEMUKAN!");

}
