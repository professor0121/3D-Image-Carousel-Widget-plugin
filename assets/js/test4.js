 
(function($) {
    $(document).ready(function() {
        // Initialize Swiper for the vertical carousel (Right container)
        var verticalCarousel = new Swiper('.vertical-carousel', {
            direction: 'vertical',    // Enable vertical direction
            loop: true,               // Infinite loop
            slidesPerView: 4,         // Show 3 images at a time
            spaceBetween: 10,         // Space between images
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
                shadow: false,
                slideShadows: false,   // Disable shadows for clean cube effect
                shadowOffset: 0,
                shadowScale: 0,
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            speed: 3000,              // Increase speed for smoother sliding
            centeredSlides: true,     // Keep the cube centered for smoother effect
        });

        // Initialize Swiper for the text slider (Heading & Description)
        var textSwiper = new Swiper('.text-swiper-slider', {
            loop: true,                 // Infinite loop of text slides
            autoplay: {
                delay: 3000,            // Delay between slide transitions (3 seconds)
                disableOnInteraction: false, // Keep autoplay even after user interaction
            },
            speed: 3000,                // Speed of slide transition (1 second)
            // effect: 'fade',             // Fade effect between slides
            pagination: {
                el: '.swiper-pagination', // Add pagination (optional)
                clickable: true,          // Allow clicking on pagination bullets
            },
            navigation: {
                nextEl: '.swiper-button-next',  // Next button
                prevEl: '.swiper-button-prev',  // Previous button
            },
        });
        
    });
})(jQuery);
