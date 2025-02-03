//Navbar appearance and hiding while scroll up & down
const body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY; 
    if (currentScroll <= 0) {
        body.classList.remove("scroll-up");
        return;
    }

    if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-up");
        body.classList.add("scroll-down");
    } else if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-down");
        body.classList.add("scroll-up");
    }
    lastScroll = currentScroll;
});


//Auto sliding
const carousel = document.querySelector("#carousel");
const totalImages = document.querySelectorAll("#carousel img").length;
let currentIndex = 0;

function slide() {
    if (currentIndex >= totalImages / 2) {
        carousel.style.transition = "none";
        carousel.style.transform = `translateX(0)`;
        currentIndex = 0;

        setTimeout(() => {
            carousel.style.transition = "transform 2s ease-in-out";
        }, 50);
    }

    carousel.style.transform = `translateX(-${(currentIndex + 1) * 392}px)`;
    currentIndex++;
}

setInterval(slide, 2000);
