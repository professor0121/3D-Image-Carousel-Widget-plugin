
// document.addEventListener('DOMContentLoaded', function () {
//     const widgets = document.querySelectorAll('.image-carousel-widget');

//     widgets.forEach(function (widget) {
//         const fullImageContainer = widget.querySelector('.full-image-container');
//         const carouselContainer = widget.querySelector('.carousel-container');
//         let images = [];

//         // Collect images from the carousel
//         carouselContainer.querySelectorAll('img').forEach(function (img) {
//             images.push(img.src);
//         });

//         if (images.length === 0) return;

//         // Create Swiper structure for cube effect
//         const swiperContainer = document.createElement('div');
//         swiperContainer.classList.add('swiper');
//         const swiperWrapper = document.createElement('div');
//         swiperWrapper.classList.add('swiper-wrapper');

//         // Add images as Swiper slides
//         images.forEach((src) => {
//             const swiperSlide = document.createElement('div');
//             swiperSlide.classList.add('swiper-slide');

//             const imgElement = document.createElement('img');
//             imgElement.src = src;
//             imgElement.alt = "Carousel Image";
//             imgElement.style.width = "100%";
//             imgElement.style.height = "auto";

//             swiperSlide.appendChild(imgElement);
//             swiperWrapper.appendChild(swiperSlide);
//         });

//         swiperContainer.appendChild(swiperWrapper);

//         // Replace the full-image-container content with Swiper
//         fullImageContainer.innerHTML = ''; // Clear previous content
//         fullImageContainer.appendChild(swiperContainer);

//         // Initialize Swiper with vertical cube effect
//         const swiperInstance = new Swiper(swiperContainer, {
//             effect: 'cube',
//             direction: 'vertical', // Rotate along Y-axis (vertical)
//             grabCursor: true,
//             cubeEffect: {
//                 shadow: true,
//                 slideShadows: true,
//                 shadowOffset: 20,
//                 shadowScale: 0.94,
//             },
//             autoplay: {
//                 delay: 3000, // Auto-rotate delay in milliseconds
//                 disableOnInteraction: false,
//             },
//             loop: true, // Infinite loop
//         });

//         // Function to auto-update images
//         function updateCarouselImages() {
//             let updatedImages = [];
//             carouselContainer.querySelectorAll('img').forEach(function (img) {
//                 updatedImages.push(img.src);
//             });

//             // Only update if there are new images
//             if (updatedImages.length > images.length) {
//                 images = updatedImages;

//                 // Clear previous slides and add new ones
//                 swiperWrapper.innerHTML = ''; // Clear previous slides

//                 images.forEach((src) => {
//                     const swiperSlide = document.createElement('div');
//                     swiperSlide.classList.add('swiper-slide');

//                     const imgElement = document.createElement('img');
//                     imgElement.src = src;
//                     imgElement.alt = "Updated Carousel Image";
//                     imgElement.style.width = "100%";
//                     imgElement.style.height = "auto";

//                     swiperSlide.appendChild(imgElement);
//                     swiperWrapper.appendChild(swiperSlide);
//                 });

//                 // Update Swiper instance
//                 swiperInstance.update(); // Ensure the Swiper instance is updated
//             }
//         }

//         // Observe for changes in the carousel container (images added dynamically)
//         const observer = new MutationObserver(updateCarouselImages);
//         observer.observe(carouselContainer, {
//             childList: true, // Observe direct children (img tags)
//             subtree: true, // Observe all descendants
//         });
//     });


// });



// document.addEventListener('DOMContentLoaded', function () {
//     const widgets = document.querySelectorAll('.image-carousel-widget');

//     widgets.forEach(function (widget) {
//         const fullImageContainer = widget.querySelector('.full-image-container');
//         const carouselContainer = widget.querySelector('.carousel-container');
//         let images = [];

//         // Collect images from the carousel
//         carouselContainer.querySelectorAll('img').forEach(function (img) {
//             images.push(img.src);
//         });

//         if (images.length === 0) return;

//         // Create Swiper structure for cube effect
//         const swiperContainer = document.createElement('div');
//         swiperContainer.classList.add('swiper');
//         const swiperWrapper = document.createElement('div');
//         swiperWrapper.classList.add('swiper-wrapper');

//         // Add images as Swiper slides
//         images.forEach((src) => {
//             const swiperSlide = document.createElement('div');
//             swiperSlide.classList.add('swiper-slide');

//             const imgElement = document.createElement('img');
//             imgElement.src = src;
//             imgElement.alt = "Carousel Image";
//             imgElement.style.width = "100%";
//             imgElement.style.height = "auto";

//             swiperSlide.appendChild(imgElement);
//             swiperWrapper.appendChild(swiperSlide);
//         });

//         swiperContainer.appendChild(swiperWrapper);

//         // Replace the full-image-container content with Swiper
//         fullImageContainer.innerHTML = ''; // Clear previous content
//         fullImageContainer.appendChild(swiperContainer);

//         // Initialize Swiper with vertical cube effect
//         const swiperInstance = new Swiper(swiperContainer, {
//             effect: 'cube',
//             direction: 'vertical', // Rotate along Y-axis (vertical)
//             grabCursor: true,
//             cubeEffect: {
//                 shadow: true,
//                 slideShadows: true,
//                 shadowOffset: 20,
//                 shadowScale: 0.94,
//             },
//             autoplay: {
//                 delay: 3000, // Auto-rotate delay in milliseconds
//                 disableOnInteraction: false,
//             },
//             loop: true, // Infinite loop
//         });

//         // Synchronize the full image container with the current carousel image
//         function updateFullImage() {
//             const activeSlide = swiperWrapper.querySelector('.swiper-slide-active img');
//             if (activeSlide) {
//                 fullImageContainer.querySelector('img').src = activeSlide.src; // Update the full image
//             }
//         }

//         // Function to auto-update images in carousel
//         function updateCarouselImages() {
//             let updatedImages = [];
//             carouselContainer.querySelectorAll('img').forEach(function (img) {
//                 updatedImages.push(img.src);
//             });

//             // Only update if there are new images
//             if (updatedImages.length > images.length) {
//                 images = updatedImages;

//                 // Clear previous slides and add new ones
//                 swiperWrapper.innerHTML = ''; // Clear previous slides

//                 images.forEach((src) => {
//                     const swiperSlide = document.createElement('div');
//                     swiperSlide.classList.add('swiper-slide');

//                     const imgElement = document.createElement('img');
//                     imgElement.src = src;
//                     imgElement.alt = "Updated Carousel Image";
//                     imgElement.style.width = "100%";
//                     imgElement.style.height = "auto";

//                     swiperSlide.appendChild(imgElement);
//                     swiperWrapper.appendChild(swiperSlide);
//                 });

//                 // Update Swiper instance
//                 swiperInstance.update(); // Ensure the Swiper instance is updated
//                 updateFullImage(); // Update the full image after carousel update
//             }
//         }

//         // Observe for changes in the carousel container (images added dynamically)
//         const observer = new MutationObserver(updateCarouselImages);
//         observer.observe(carouselContainer, {
//             childList: true, // Observe direct children (img tags)
//             subtree: true, // Observe all descendants
//         });

//         // Sync the full image container on Swiper initialization and slide change
//         swiperInstance.on('slideChange', updateFullImage);
//     });
// });


// document.addEventListener('DOMContentLoaded', function () {
//     const widgets = document.querySelectorAll('.image-carousel-widget');

//     widgets.forEach(function (widget) {
//         const fullImageContainer = widget.querySelector('.full-image-container');
//         const carouselContainer = widget.querySelector('.carousel-container');
//         let images = [];

//         // Collect images from the carousel
//         carouselContainer.querySelectorAll('img').forEach(function (img) {
//             images.push(img.src);
//         });

//         if (images.length === 0) return;

//         // 1. Set up Swiper for the carousel (vertical slider)
//         const carouselSwiperContainer = document.createElement('div');
//         carouselSwiperContainer.classList.add('swiper');
//         const carouselSwiperWrapper = document.createElement('div');
//         carouselSwiperWrapper.classList.add('swiper-wrapper');

//         // Add images as Swiper slides for the vertical slider
//         images.forEach((src) => {
//             const swiperSlide = document.createElement('div');
//             swiperSlide.classList.add('swiper-slide');

//             const imgElement = document.createElement('img');
//             imgElement.src = src;
//             imgElement.alt = "Carousel Image";
//             imgElement.style.width = "100%";
//             imgElement.style.height = "auto";

//             swiperSlide.appendChild(imgElement);
//             carouselSwiperWrapper.appendChild(swiperSlide);
//         });

//         carouselSwiperContainer.appendChild(carouselSwiperWrapper);
//         carouselContainer.innerHTML = ''; // Clear previous content
//         carouselContainer.appendChild(carouselSwiperContainer);

//         // Initialize Swiper for carousel-container (vertical slider with autoplay)
//         const carouselSwiper = new Swiper(carouselSwiperContainer, {
//             direction: 'vertical', // Vertical sliding
//             slidesPerView: 3, // Show 3 thumbnails at a time
//             spaceBetween: 10,
//             loop: true, // Infinite loop
//             autoplay: {
//                 delay: 3000, // Auto-slide every 3 seconds
//                 disableOnInteraction: false,
//             },
//         });

//         // 2. Set up Swiper for the full-image-container (cube effect)
//         const fullSwiperContainer = document.createElement('div');
//         fullSwiperContainer.classList.add('swiper');
//         const fullSwiperWrapper = document.createElement('div');
//         fullSwiperWrapper.classList.add('swiper-wrapper');

//         // Add images as Swiper slides for the cube effect
//         images.forEach((src) => {
//             const swiperSlide = document.createElement('div');
//             swiperSlide.classList.add('swiper-slide');

//             const imgElement = document.createElement('img');
//             imgElement.src = src;
//             imgElement.alt = "Full Image";
//             imgElement.style.width = "100%";
//             imgElement.style.height = "auto";

//             swiperSlide.appendChild(imgElement);
//             fullSwiperWrapper.appendChild(swiperSlide);
//         });

//         fullSwiperContainer.appendChild(fullSwiperWrapper);
//         fullImageContainer.innerHTML = ''; // Clear previous content
//         fullImageContainer.appendChild(fullSwiperContainer);

//         // Initialize Swiper for full-image-container (cube effect with autoplay)
//         const fullSwiper = new Swiper(fullSwiperContainer, {
//             effect: 'cube',
//             grabCursor: true,
//             cubeEffect: {
//                 shadow: true,
//                 slideShadows: true,
//                 shadowOffset: 20,
//                 shadowScale: 0.94,
//             },
//             autoplay: {
//                 delay: 3000, // Auto-slide every 3 seconds
//                 disableOnInteraction: false,
//             },
//             loop: true, // Infinite loop
//         });

//         // Synchronize full-image-container with carousel-container
//         fullSwiper.on('slideChange', () => {
//             const activeIndex = fullSwiper.realIndex;
//             carouselSwiper.slideToLoop(activeIndex); // Sync vertical slider with cube
//         });

//         carouselSwiper.on('slideChange', () => {
//             const activeIndex = carouselSwiper.realIndex;
//             fullSwiper.slideToLoop(activeIndex); // Sync cube with vertical slider
//         });
//     });
// });

// -------------------------------------------------------------------------------


// document.addEventListener('DOMContentLoaded', function () {
//     const widgets = document.querySelectorAll('.image-carousel-widget');

//     widgets.forEach(function (widget) {
//         const fullImageContainer = widget.querySelector('.full-image-container');
//         const carouselContainer = widget.querySelector('.carousel-container');
//         let images = [];

//         // Collect images from the carousel
//         carouselContainer.querySelectorAll('img').forEach(function (img) {
//             images.push(img.src);
//         });

//         if (images.length === 0) return;

//         // 1. Set up Swiper for the carousel (vertical slider)
//         const carouselSwiperContainer = document.createElement('div');
//         carouselSwiperContainer.classList.add('swiper');
//         const carouselSwiperWrapper = document.createElement('div');
//         carouselSwiperWrapper.classList.add('swiper-wrapper');

//         // Add images as Swiper slides for the vertical slider
//         images.forEach((src) => {
//             const swiperSlide = document.createElement('div');
//             swiperSlide.classList.add('swiper-slide');

//             const imgElement = document.createElement('img');
//             imgElement.src = src;
//             imgElement.alt = "Carousel Image";
//             imgElement.style.width = "100%";
//             imgElement.style.height = "auto";

//             swiperSlide.appendChild(imgElement);
//             carouselSwiperWrapper.appendChild(swiperSlide);
//         });

//         carouselSwiperContainer.appendChild(carouselSwiperWrapper);
//         carouselContainer.innerHTML = ''; // Clear previous content
//         carouselContainer.appendChild(carouselSwiperContainer);

//         // Initialize Swiper for carousel-container (vertical slider with autoplay)
//         const carouselSwiper = new Swiper(carouselSwiperContainer, {
//             direction: 'vertical', // Vertical sliding
//             slidesPerView: 3, // Show 3 thumbnails at a time
//             spaceBetween: 10,
//             loop: true, // Infinite loop
//             autoplay: {
//                 delay: 3000, // Auto-slide every 3 seconds
//                 disableOnInteraction: false,    
//             },
//         });

//         // 2. Set up Swiper for the full-image-container (cube effect)
//         const fullSwiperContainer = document.createElement('div');
//         fullSwiperContainer.classList.add('swiper');
//         const fullSwiperWrapper = document.createElement('div');
//         fullSwiperWrapper.classList.add('swiper-wrapper');

//         // Add images as Swiper slides for the cube effect
//         images.forEach((src) => {
//             const swiperSlide = document.createElement('div');
//             swiperSlide.classList.add('swiper-slide');

//             const imgElement = document.createElement('img');
//             imgElement.src = src;
//             imgElement.alt = "Full Image";
//             imgElement.style.width = "100%";
//             imgElement.style.height = "auto";

//             swiperSlide.appendChild(imgElement);
//             fullSwiperWrapper.appendChild(swiperSlide);
//         });

//         fullSwiperContainer.appendChild(fullSwiperWrapper);
//         fullImageContainer.innerHTML = ''; // Clear previous content
//         fullImageContainer.appendChild(fullSwiperContainer);

//         // Initialize Swiper for full-image-container (vertical cube rotation with autoplay)
//         const fullSwiper = new Swiper(fullSwiperContainer, {
//             effect: 'cube',
//             grabCursor: true,
//             cubeEffect: {
//                 shadow: true,
//                 slideShadows: true,
//                 shadowOffset: 20,
//                 shadowScale: 0.94,
//             },
//             autoplay: {
//                 delay: 1000, // Auto-slide every 3 seconds
//                 disableOnInteraction: false,
//             },
//             loop: true, // Infinite loop
//             direction: 'vertical', // Rotate cube vertically
//         });

//         // Synchronize full-image-container with carousel-container
//         fullSwiper.on('slideChange', () => {
//             const activeIndex = fullSwiper.realIndex;
//             carouselSwiper.slideToLoop(activeIndex); // Sync vertical slider with cube
//         });

//         carouselSwiper.on('slideChange', () => {
//             const activeIndex = carouselSwiper.realIndex;
//             fullSwiper.slideToLoop(activeIndex); // Sync cube with vertical slider
//         });
//     });
// });


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
