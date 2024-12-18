//https://www.w3schools.com/howto/howto_js_lightbox.asp

function openIMG() {
    document.getElementById("myIMG").style.display = "block";
}

function closeIMG() {
    document.getElementById("myIMG").style.display = "none";
}

var slide_index = 1;
showSlide(slide_index);

function nextSlide(n) {
    showSlide(slide_index += n);
}

function currentSlide(n) {
    showSlide(slide_index = n);
}

function showSlide(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var caption_text = document.getElementById("caption");

    if (n > slides.length) {
        slide_index = 1;
    }

    if (n < 1) {
        slide_index = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slide_index - 1].style.display = "block";
    dots[slide_index - 1].className += " active";
    caption_text.innerHTML = dots[slide_index - 1].alt;
}

