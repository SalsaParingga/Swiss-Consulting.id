// ==============================
// BACK TO TOP
// ==============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.pageYOffset>300){

        topBtn.classList.add("show");

    }else{

        topBtn.classList.remove("show");

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


// ==============================
// LOADER
// ==============================

window.addEventListener("load",()=>{

    const loader=document.querySelector(".loader");

    if(loader){

        loader.classList.add("hide");

    }

});


// ==============================
// SCROLL ANIMATION
// ==============================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{

    threshold:.15

});

document.querySelectorAll(".fade-up").forEach(el=>{

    observer.observe(el);

});