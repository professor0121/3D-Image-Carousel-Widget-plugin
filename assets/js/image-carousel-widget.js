 
document.addEventListener('DOMContentLoaded', function () {
    const widgets = document.querySelectorAll('.image-carousel-widget');

    widgets.forEach(function (widget) {
        const fullImageContainer = widget.querySelector('.full-image-container');
        const carouselContainer = widget.querySelector('.carousel-container');
        let images = [];
        let currentIndex = 0;

        // Collecting images from the carousel
        carouselContainer.querySelectorAll('img').forEach(function (img) {
            images.push(img.src);
        });

        if (images.length === 0) return;

        // Function to update the full-size image with the 3D flip
        const updateFullImage = () => {
            const newImage = document.createElement('img');
            newImage.src = images[currentIndex];
            newImage.alt = "Full Image";
            newImage.style.width = "100%";
            newImage.style.height = "auto";

            // Create a wrapper for the 3D flip effect
            const flipWrapper = document.createElement('div');
            flipWrapper.classList.add('flip-wrapper');
            flipWrapper.appendChild(newImage);

            // Add the flip effect before replacing the image
            fullImageContainer.querySelector('.flip-wrapper').classList.add('flip'); // Trigger flip animation

            setTimeout(() => {
                // Clear the current content and add the wrapper with the image
                fullImageContainer.innerHTML = ''; // Clear the current image
                fullImageContainer.appendChild(flipWrapper);
                flipWrapper.classList.remove('flip'); // Reset the flip animation

                // Increment the index for the next image
                currentIndex = (currentIndex + 1) % images.length;
            }, 1000); // The duration of the flip animation (must match CSS transition duration)
        };

        // Function to update the carousel container
        const updateCarouselContainer = () => {
            carouselContainer.innerHTML = '';
            images.forEach((src, index) => {
                const imgElement = document.createElement('img');
                imgElement.src = src;
                imgElement.style.order = (index - currentIndex + images.length) % images.length;
                carouselContainer.appendChild(imgElement);
            });
        };

        // Initial Image Setup
        fullImageContainer.innerHTML = `<div class="flip-wrapper"><img src="${images[0]}" alt="Full Image" style="width: 100%; height: auto;" /></div>`;
        updateCarouselContainer();

        // Start Carousel Animation
        setInterval(() => {
            updateFullImage();
            updateCarouselContainer();
        }, 2000);
    });
});
