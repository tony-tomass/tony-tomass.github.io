// https://www.youtube.com/watch?v=hJ7Rg1821Q0
const gal_img_container = document.querySelectorAll(".galIMG_container"); // Get all divs with this class
gal_img_container.forEach(div => {                                        // Loop through each one and get the img child
    const gal_img = div.querySelector("img");

    function loaded() {
        div.classList.add("loaded");                                      // Img gets added to loaded class which signals the image to be loaded
    }

    if (gal_img.complete) {
        loaded();
    }
    else {
        gal_img.addEventListener("load", loaded);
    }
})