document.addEventListener('DOMContentLoaded', function () {
    const widgets = document.querySelectorAll('.image-carousel-widget');

    widgets.forEach(function (widget) {
        const fullImageContainer = widget.querySelector('.full-image-container');
        const carouselContainer = widget.querySelector('.carousel-container');
        const autoplayInterval = widget.dataset.autoplayInterval || 3000; // Default autoplay interval
        const slidesPerView = widget.dataset.slidesPerView || 3; // Default slides per view

        let images = Array.from(carouselContainer.querySelectorAll('img')).map(img => img.src);

        // If no images available, show fallback message
        if (images.length === 0) {
            fullImageContainer.innerHTML = "<p>No images available</p>";
            carouselContainer.innerHTML = "<p>No images available</p>";
            return;
        }

        // Function to create Swiper container
        function createSwiperContainer(images, effect = null) {
            const container = document.createElement('div');
            container.classList.add('swiper');
            const wrapper = document.createElement('div');
            wrapper.classList.add('swiper-wrapper');

            images.forEach((src) => {
                const slide = document.createElement('div');
                slide.classList.add('swiper-slide');
                const img = document.createElement('img');
                img.src = src;
                img.alt = "Carousel Image";
                img.style.width = "100%";
                img.style.height = "auto";
                slide.appendChild(img);
                wrapper.appendChild(slide);
            });

            container.appendChild(wrapper);
            return container;
        }

        // Initialize and render carousels
        const carouselSwiperContainer = createSwiperContainer(images);
        carouselContainer.innerHTML = ''; // Clear previous content
        carouselContainer.appendChild(carouselSwiperContainer);

        const fullSwiperContainer = createSwiperContainer(images, 'cube');
        fullImageContainer.innerHTML = ''; // Clear previous content
        fullImageContainer.appendChild(fullSwiperContainer);

        // Initialize Swipers
        const carouselSwiper = new Swiper(carouselSwiperContainer, {
            direction: 'vertical',
            slidesPerView: slidesPerView,
            spaceBetween: 10,
            autoplay: {
                delay: autoplayInterval,
                disableOnInteraction: false,
            },
            speed: 2000,
        });

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
                delay: autoplayInterval,
            },
            direction: 'vertical',
            speed: 2000,
        });

        // Manually handle infinite looping
        function manualLooping(swiper, totalImages) {
            if (swiper.realIndex === totalImages - 1) {
                swiper.slideTo(0, 0); // Manually reset to the first slide
            }
        }

        // Synchronize carousels
        function syncCarousels() {
            const activeIndex = fullSwiper.realIndex;
            carouselSwiper.slideTo(activeIndex); // Sync carousel with full image view
            fullSwiper.slideTo(carouselSwiper.realIndex); // Sync full image with carousel
        }

        fullSwiper.on('slideChange', syncCarousels);
        carouselSwiper.on('slideChange', syncCarousels);

        // Handle click navigation
        carouselContainer.querySelectorAll('.swiper-slide img').forEach((image, index) => {
            image.addEventListener('click', () => {
                fullSwiper.slideTo(index);
                carouselSwiper.slideTo(index);
            });
        });

        // Handle manual infinite loop for both carousels
        setInterval(() => {
            manualLooping(carouselSwiper, images.length);
            manualLooping(fullSwiper, images.length);
        }, autoplayInterval);
    });
});
