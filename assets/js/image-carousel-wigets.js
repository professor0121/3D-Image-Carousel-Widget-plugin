(function ($) {
    $(document).ready(function () {
        // Initialize Swiper for the vertical carousel (Right container)
        var verticalCarousel = new Swiper('.vertical-carousel', {
            direction: 'vertical',    // Enable vertical direction
            loop: true,               // Infinite loop
            slidesPerView: 3,         // Show 3 images at a time
            // spaceBetween: 100,         // Space between images
            autoplay: {
                delay: 3000,          // Delay for autoplay
                disableOnInteraction: false, // Don't disable autoplay on interaction
            },
            speed: 3000,              // Speed of sliding
        });

        // Initialize Swiper for the cube (Left container)
        var cubeSwiper = new Swiper('.cube-container', {
            direction: 'vertical',
            loop: true,
            effect: 'cube',           // Cube effect for 3D rotating cube
            cubeEffect: {
                shadow: true,
                slideShadows: true,   // Disable shadows for clean cube effect
                shadowOffset: 0,
                shadowScale: 0,
            },
            on: {
                slideChangeTransitionStart: function () {
                    document.querySelectorAll(".cube-container .swiper-slide img").forEach(img => {
                        img.classList.remove("zoomed"); // Remove zoom from all images
                    });

                    let activeSlide = document.querySelector(".cube-container .swiper-slide-active img");
                    if (activeSlide) {
                        activeSlide.classList.add("zoomed"); // Add zoom only to the active one
                    }
                }
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            speed: 3000,              // Increase speed for smoother sliding
            centeredSlides: true,     // Keep the cube centered for smoother effect
        });

        var textSwiper = new Swiper('.text-swiper-slider', {
            loop: true,
            effect: 'fade',   // Use fade effect for transitioning
            fadeEffect: {
                crossFade: true,  // Make the fade transition smooth
            },
            autoplay: {
                delay: 3000, // Delay between slide transitions
                disableOnInteraction: false,  // Keep autoplay on interaction
            },
            speed: 3000, // Speed of transition
            pagination: {
                el: '.swiper-pagination', // Optional pagination
                clickable: false,
            },
            // navigation: {
            //     nextEl: '.swiper-button-next',  // Next button
            //     prevEl: '.swiper-button-prev',  // Previous button
            // },
        });
    });
})(jQuery);
