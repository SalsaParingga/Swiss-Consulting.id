// ========================================
// COUNTER
// ========================================

const counters = document.querySelectorAll(".number");

let counterStarted = false;

// Fungsi animasi counter
function startCounter() {

    counters.forEach(counter => {

        const target = Number(counter.dataset.target);

        let current = 0;

        const increment = Math.max(1, Math.ceil(target / 100));

        function updateCounter() {

            current += increment;

            if (current >= target) {

                counter.innerText = target.toLocaleString();

            } else {

                counter.innerText = current.toLocaleString();

                requestAnimationFrame(updateCounter);

            }

        }

        updateCounter();

    });

}

// Mengecek apakah section counter sudah terlihat
function checkCounter() {

    const counterSection = document.querySelector(".counter");

    if (!counterSection) return;

    const triggerPoint = window.innerHeight * 0.8;

    const sectionTop = counterSection.getBoundingClientRect().top;

    if (sectionTop < triggerPoint && !counterStarted) {

        counterStarted = true;

        startCounter();

    }

}

// Jalankan saat halaman dimuat
window.addEventListener("load", checkCounter);

// Jalankan saat discroll
window.addEventListener("scroll", checkCounter);