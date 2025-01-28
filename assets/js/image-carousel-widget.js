
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

        if (images.length === 0) return;

        // Create Swiper structure for cube effect
        const swiperContainer = document.createElement('div');
        swiperContainer.classList.add('swiper');
        const swiperWrapper = document.createElement('div');
        swiperWrapper.classList.add('swiper-wrapper');

        // Add images as Swiper slides
        images.forEach((src) => {
            const swiperSlide = document.createElement('div');
            swiperSlide.classList.add('swiper-slide');

            const imgElement = document.createElement('img');
            imgElement.src = src;
            imgElement.alt = "Carousel Image";
            imgElement.style.width = "100%";
            imgElement.style.height = "auto";

            swiperSlide.appendChild(imgElement);
            swiperWrapper.appendChild(swiperSlide);
        });

        swiperContainer.appendChild(swiperWrapper);

        // Replace the full-image-container content with Swiper
        fullImageContainer.innerHTML = ''; // Clear previous content
        fullImageContainer.appendChild(swiperContainer);

        // Initialize Swiper with vertical cube effect
        const swiperInstance = new Swiper(swiperContainer, {
            effect: 'cube',
            direction: 'vertical', // Rotate along Y-axis (vertical)
            grabCursor: true,
            cubeEffect: {
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
            },
            autoplay: {
                delay: 3000, // Auto-rotate delay in milliseconds
                disableOnInteraction: false,
            },
            loop: true, // Infinite loop
        });

        // Synchronize the full image container with the current carousel image
        function updateFullImage() {
            const activeSlide = swiperWrapper.querySelector('.swiper-slide-active img');
            if (activeSlide) {
                fullImageContainer.querySelector('img').src = activeSlide.src; // Update the full image
            }
        }

        // Function to auto-update images in carousel
        function updateCarouselImages() {
            let updatedImages = [];
            carouselContainer.querySelectorAll('img').forEach(function (img) {
                updatedImages.push(img.src);
            });

            // Only update if there are new images
            if (updatedImages.length > images.length) {
                images = updatedImages;

                // Clear previous slides and add new ones
                swiperWrapper.innerHTML = ''; // Clear previous slides

                images.forEach((src) => {
                    const swiperSlide = document.createElement('div');
                    swiperSlide.classList.add('swiper-slide');

                    const imgElement = document.createElement('img');
                    imgElement.src = src;
                    imgElement.alt = "Updated Carousel Image";
                    imgElement.style.width = "100%";
                    imgElement.style.height = "auto";

                    swiperSlide.appendChild(imgElement);
                    swiperWrapper.appendChild(swiperSlide);
                });

                // Update Swiper instance
                swiperInstance.update(); // Ensure the Swiper instance is updated
                updateFullImage(); // Update the full image after carousel update
            }
        }

        // Observe for changes in the carousel container (images added dynamically)
        const observer = new MutationObserver(updateCarouselImages);
        observer.observe(carouselContainer, {
            childList: true, // Observe direct children (img tags)
            subtree: true, // Observe all descendants
        });

        // Sync the full image container on Swiper initialization and slide change
        swiperInstance.on('slideChange', updateFullImage);
    });
});
