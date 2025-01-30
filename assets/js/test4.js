// (function($) {
//     $(document).ready(function() {
//         // Initialize Swiper for the vertical carousel
//         var verticalCarousel = new Swiper('.vertical-carousel', {
//             direction: 'vertical',
//             loop: true,
//             autoplay: {
//                 delay: 3000, // Set autoplay delay
//                 disableOnInteraction: false,
//             },
//             speed: 1000, // Set speed of sliding
//         });

//         // Initialize Swiper for the cube (3D effect)
//         var cubeSwiper = new Swiper('.cube-container', {
//             loop: true,
//             direction: 'vertical',
//             effect: 'cube',  // Use cube effect for 3D rotating cube
//             cubeEffect: {
//                 shadow: false,
//                 slideShadows: false,  // Disable shadows for clean cube effect
//                 shadowOffset: 0,
//                 shadowScale: 0,
//             },
//             autoplay: {
//                 delay: 3000,
//                 disableOnInteraction: false,
//             },
//             speed: 1000, // Set speed of sliding
//         });
//     });
// })(jQuery);


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
            speed: 1000,              // Speed of sliding
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
            speed: 1000,              // Set speed of sliding
        });
    });
})(jQuery);
