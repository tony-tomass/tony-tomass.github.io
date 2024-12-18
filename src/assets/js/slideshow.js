let slide_pos = 1;
showSlide(slide_pos);

function plusSlide(n) {
    showSlide(slide_pos += n);
}

function currentSlide(n) {
    showSlide(slide_pos = n);
}

function showSlide(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("demo");
    let caption = document.getElementById("caption");

    if (n > slides.length) {
        slide_pos = 1;
    }
    if (n < 1) {
        slide_pos = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < slides.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slide_pos - 1].style.display = "block";
    dots[slide_pos - 1].className += " active";
    //caption.innerHTML = dots[slide_pos - 1].alt;
}