/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

}


/* =========================
   CLOSE MOBILE MENU
========================= */

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (navMenu) {
            navMenu.classList.remove("active");
        }

    });

});


/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(8, 8, 8, 0.96)";
    } else {
        navbar.style.background = "rgba(8, 8, 8, 0.85)";
    }

});


/* =========================
   REVEAL ANIMATION
========================= */

const revealElements = document.querySelectorAll(
    ".section-heading, .project-card, .video-card, .timeline-item, .skill-group, .cert-card, .education-item"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.08
    }
);


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "opacity .7s ease, transform .7s ease";

    observer.observe(element);

});


/* =========================
   VIDEO HOVER
========================= */

const videos = document.querySelectorAll("video");

videos.forEach(video => {

    video.addEventListener("mouseenter", () => {

        if (window.innerWidth > 700) {
            video.play().catch(() => {});
        }

    });

    video.addEventListener("mouseleave", () => {

        if (window.innerWidth > 700) {
            video.pause();
        }

    });

});