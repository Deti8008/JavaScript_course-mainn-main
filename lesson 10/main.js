let slideIndex = 0;
let slides = document.getElementsByClassName("mySlides");

function showSlides(n, direction) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active", "slide-in-left", "slide-in-right", "show-from-left", "show-from-right");
        slides[i].style.display = "none";
    }

    slides[n].style.display = "block";
    slides[n].classList.add("active");

    if (direction === "right") {
        slides[n].classList.add("slide-in-right");
        setTimeout(() => {
            slides[n].classList.remove("slide-in-right");
            slides[n].classList.add("show-from-right");
        }, 10);
    } else {
        slides[n].classList.add("slide-in-left");
        setTimeout(() => {
            slides[n].classList.remove("slide-in-left");
            slides[n].classList.add("show-from-left");
        }, 10);
    }
}

function plusSlides(n) {
    let direction = n > 0 ? "right" : "left";
    slideIndex += n;
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    showSlides(slideIndex, direction);
}

// Initialize first slide
showSlides(slideIndex, "right");