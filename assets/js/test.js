document.addEventListener('DOMContentLoaded', function () {
    const widgets = document.querySelectorAll('.image-carousel-widget');

    widgets.forEach(function (widget) {
        const fullImageContainer = widget.querySelector('.full-image-container');
        const carouselContainer = widget.querySelector('.carousel-container');
        const autoplayInterval = widget.dataset.autoplayInterval || 1000; // Allowing dynamic autoplay interval (default: 3000)
        const slidesPerView = widget.dataset.slidesPerView || 3; // Allow dynamic slides per view (default: 3)
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

        // Create carousel for the thumbnail images
        const carouselSwiperContainer = document.createElement('div');
        carouselSwiperContainer.classList.add('swiper');
        const carouselSwiperWrapper = document.createElement('div');
        carouselSwiperWrapper.classList.add('swiper-wrapper');

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

        // Initialize the carousel with dynamic slides per view and autoplay interval
        const carouselSwiper = new Swiper(carouselSwiperContainer, {
            direction: 'vertical', // Vertical sliding
            slidesPerView: slidesPerView, // Dynamic slides per view
            spaceBetween: 10,
            loop: true, // Infinite loop
            autoplay: {
                delay: autoplayInterval, // Auto-slide every X milliseconds
                disableOnInteraction: false, // Do not stop autoplay on interaction
            },
            loopAdditionalSlides: images.length, // Ensure smooth looping with additional slides
            speed: 2000, // Transition speed
        });
        // Create full-image carousel with cube effect
        const fullSwiperContainer = document.createElement('div');
        fullSwiperContainer.classList.add('swiper');
        const fullSwiperWrapper = document.createElement('div');
        fullSwiperWrapper.classList.add('swiper-wrapper');

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

        // Initialize full-image container with cube effect
        const fullSwiper = new Swiper(fullSwiperContainer, {
            effect: 'cube',
            grabCursor: true,
            cubeEffect: {
                shadow: true,
                slideShadows: true,
                shadowOffset: 200,
                shadowScale: 0.94,
            },
            autoplay: {
                delay: autoplayInterval, // Auto-slide every X milliseconds
                disableOnInteraction: false, // Do not stop autoplay on interaction
            },
            loop: false, // Infinite loop
            direction: 'vertical', // Rotate cube vertically
            loopAdditionalSlides: images.length, // Ensures smooth infinite loop
            speed: 1000, // Transition speed
        });

        // Synchronize both carousels
        fullSwiper.on('slideChange', () => {
            const activeIndex = fullSwiper.realIndex;
            carouselSwiper.slideToLoop(activeIndex); // Sync carousel with full image view
        });

        carouselSwiper.on('slideChange', () => {
            const activeIndex = carouselSwiper.realIndex;
            fullSwiper.slideToLoop(activeIndex); // Sync full image with carousel
        });

        // Navigation Logic - Click to navigate to the full image container
        const carouselImages = carouselContainer.querySelectorAll('.swiper-slide img');
        carouselImages.forEach((image, index) => {
            image.addEventListener('click', () => {
                fullSwiper.slideToLoop(index); // Go to clicked image in full container
                carouselSwiper.slideToLoop(index); // Sync carousel to clicked image
            });
        });

        // Ensuring continuous loop behavior dynamically
        function ensureInfiniteLoop() {
            const totalImages = images.length;

            // Reset the fullSwiper and carouselSwiper to loop infinitely
            if (carouselSwiper.realIndex === totalImages - 1) {
                carouselSwiper.slideTo(0, 0); // Restart carousel
                fullSwiper.slideTo(0, 0); // Restart full image
            }
        }

        // Keep checking and ensuring smooth loop behavior dynamically
        setInterval(ensureInfiniteLoop, autoplayInterval); // Check and reset based on autoplay interval
    });
});
