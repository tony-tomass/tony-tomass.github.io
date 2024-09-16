var slidePosition = 1;
showSlide(slidePosition);

function plusSlides(n) {
    showSlide(slidePosition += n);
}

function currentSlide(n) {
    showSlide(slidePosition = n);
}

function showSlide(n) {
    var i;
    var slides = document.getElementsByClassName("container");
    var squares = document.getElementsByClassName("sqr");
    if (n > slides.length) {slidePosition = 1}
    if (n < 1) {slidePosition = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < squares.length; i++) {
        squares[i].className = squares[i].className.replace(" enable", "");
    }
    slides[slidePosition-1].style.display = "block";
    squares[slidePosition-1].className += " enable";
}