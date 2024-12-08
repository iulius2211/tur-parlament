document.addEventListener("DOMContentLoaded", function () {
    // Gestionarea Lightbox-ului pentru galerie
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const thumbnails = document.querySelectorAll(".lightbox-thumbnails img");
    const lightboxCloseBtn = document.querySelector(".lightbox .close");

    document.querySelectorAll('.gallery').forEach(button => {
        button.addEventListener('click', function () {
            const gallery = this.dataset.gallery;
            if (gallery) {
                lightbox.style.display = "block";
                const firstThumbnail = document.querySelector(`.lightbox-thumbnails img[data-src='image1.jpg']`);
                lightboxImage.src = firsdocument.addEventListener("DOMContentLoaded", function () {
                    // Gestionarea Lightbox-ului pentru galerie
                    const lightbox = document.getElementById("lightbox");
                    const lightboxImage = document.getElementById("lightbox-image");
                    const thumbnails = document.querySelectorAll(".lightbox-thumbnails img");
                    const lightboxCloseBtn = document.querySelector(".lightbox .close");
                
                    document.querySelectorAll('.btn').forEach(button => {
                        button.addEventListener('click', function () {
                            const gallery = this.dataset.gallery;
                            if (gallery) {
                                lightbox.style.display = "block";
                                const firstThumbnail = document.querySelector(`.lightbox-thumbnails img[data-src='image1.jpg']`);
                                lightboxImage.src = firstThumbnail.getAttribute('data-src');
                                selectThumbnail(firstThumbnail);
                            } else {
                                showModal();
                            }
                        });
                    });
                
                    lightboxCloseBtn.addEventListener('click', function () {
                        lightbox.style.display = "none";
                    });
                
                    thumbnails.forEach(thumbnail => {
                        thumbnail.addEventListener('click', function () {
                            const src = this.getAttribute('data-src');
                            lightboxImage.src = src;
                            selectThumbnail(this);
                        });
                    });
                
                    function selectThumbnail(thumbnail) {
                        thumbnails.forEach(thumb => thumb.classList.remove("selected"));
                        thumbnail.classList.add("selected");
                    }
                
                    
                });
                Thumbnail.getAttribute('data-src');
                selectThumbnail(firstThumbnail);
            } else {
                showModal();
            }
        });
    });

    lightboxCloseBtn.addEventListener('click', function () {
        lightbox.style.display = "none";
    });

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function () {
            const src = this.getAttribute('data-src');
            lightboxImage.src = src;
            selectThumbnail(this);
        });
    });

    function selectThumbnail(thumbnail) {
        thumbnails.forEach(thumb => thumb.classList.remove("selected"));
        thumbnail.classList.add("selected");
    }
});
