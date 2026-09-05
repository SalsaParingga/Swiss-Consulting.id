// ==============================
// MOBILE MENU
// ==============================

const menuBtn = document.querySelector(".menu-btn");

const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click",()=>{

    navbar.classList.toggle("active");

    menuBtn.classList.toggle("active");

});

document.querySelectorAll("#navbar a").forEach(link=>{

    link.addEventListener("click",()=>{

        navbar.classList.remove("active");

        menuBtn.classList.remove("active");

    });

});