 

document.addEventListener('DOMContentLoaded', function () {
    const widgets = document.querySelectorAll('.image-carousel-widget');

    widgets.forEach(function (widget) {
        const fullImageContainer = widget.querySelector('.full-image-container');
        const carouselContainer = widget.querySelector('.carousel-container');
        let images = [];

        // Collect images from the carousel
        carouselContainer.querySelectorAll('img').forEach(function (img) {
            images.push(img.src);
        });

        // If no images are available, show a fallback message or image
        if (images.length === 0) {
            fullImageContainer.innerHTML = "<p>No images available</p>";
            carouselContainer.innerHTML = "<p>No images available</p>";
            return;
        }

        // 1. Set up Swiper for the carousel (vertical slider)
        const carouselSwiperContainer = document.createElement('div');
        carouselSwiperContainer.classList.add('swiper');
        const carouselSwiperWrapper = document.createElement('div');
        carouselSwiperWrapper.classList.add('swiper-wrapper');

        // Add images as Swiper slides for the vertical slider
        images.forEach((src) => {
            const swiperSlide = document.createElement('div');
            swiperSlide.classList.add('swiper-slide');

            const imgElement = document.createElement('img');
            imgElement.src = src;
            imgElement.alt = "Carousel Image";
            imgElement.style.width = "100%";
            imgElement.style.height = "auto";

            swiperSlide.appendChild(imgElement);
            carouselSwiperWrapper.appendChild(swiperSlide);
        });

        carouselSwiperContainer.appendChild(carouselSwiperWrapper);
        carouselContainer.innerHTML = ''; // Clear previous content
        carouselContainer.appendChild(carouselSwiperContainer);

        // Initialize Swiper for carousel-container (vertical slider with autoplay)
        const carouselSwiper = new Swiper(carouselSwiperContainer, {
            direction: 'vertical', // Vertical sliding
            slidesPerView: 3, // Show 3 thumbnails at a time
            spaceBetween: 10,
            loop: true, // Infinite loop
            autoplay: {
                delay: 3000, // Auto-slide every 3 seconds
                disableOnInteraction: false,
            },
            loopAdditionalSlides: 1, // Ensures smooth infinite loop
        });

        // 2. Set up Swiper for the full-image-container (cube effect)
        const fullSwiperContainer = document.createElement('div');
        fullSwiperContainer.classList.add('swiper');
        const fullSwiperWrapper = document.createElement('div');
        fullSwiperWrapper.classList.add('swiper-wrapper');

        // Add images as Swiper slides for the cube effect
        images.forEach((src) => {
            const swiperSlide = document.createElement('div');
            swiperSlide.classList.add('swiper-slide');

            const imgElement = document.createElement('img');
            imgElement.src = src;
            imgElement.alt = "Full Image";
            imgElement.style.width = "100%";
            imgElement.style.height = "auto";

            swiperSlide.appendChild(imgElement);
            fullSwiperWrapper.appendChild(swiperSlide);
        });

        fullSwiperContainer.appendChild(fullSwiperWrapper);
        fullImageContainer.innerHTML = ''; // Clear previous content
        fullImageContainer.appendChild(fullSwiperContainer);

        // Initialize Swiper for full-image-container (cube effect with autoplay)
        const fullSwiper = new Swiper(fullSwiperContainer, {
            effect: 'cube',
            grabCursor: true,
            cubeEffect: {
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
            },
            autoplay: {
                delay: 3000, // Auto-slide every 3 seconds
                disableOnInteraction: false, // Don't stop autoplay on interaction
            },
            loop: true, // Infinite loop
            direction: 'vertical', // Rotate cube vertically
            loopAdditionalSlides: 1, // Ensures smooth infinite loop
        });

        // Custom loop handling logic: Reset loop at the end and restart
        function resetToFirstImage() {
            // Check if carousel has reached the last image
            if (carouselSwiper.realIndex === images.length - 1) {
                // Reset carousel to first image
                carouselSwiper.slideTo(0, 0); // Go to first slide with no animation
                fullSwiper.slideTo(0, 0); // Go to first slide in the cube
            }
        }

        // Synchronize full-image-container with carousel-container
        fullSwiper.on('slideChange', () => {
            const activeIndex = fullSwiper.realIndex;
            carouselSwiper.slideToLoop(activeIndex); // Sync vertical slider with cube
            resetToFirstImage(); // Reset after last image in the loop
        });

        carouselSwiper.on('slideChange', () => {
            const activeIndex = carouselSwiper.realIndex;
            fullSwiper.slideToLoop(activeIndex); // Sync cube with vertical slider
            resetToFirstImage(); // Reset after last image in the loop
        });

        // 3. Navigation Logic - Click to navigate to the full image container
        const carouselImages = carouselContainer.querySelectorAll('.swiper-slide img');

        carouselImages.forEach((image, index) => {
            image.addEventListener('click', () => {
                // Navigate to the clicked image in full image container
                fullSwiper.slideToLoop(index); // Go to the clicked image in full container
                carouselSwiper.slideToLoop(index); // Sync carousel to the clicked image
            });
        });
    });
});
