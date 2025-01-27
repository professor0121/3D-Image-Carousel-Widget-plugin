// // // (function($){
// // //     const ImageCarouselWidget = {
// // //         init: function($scope, $) {
// // //             const $widget = $scope.find('.image-carousel-widget');
// // //             const $fullImageContainer = $widget.find('.full-image-container');
// // //             const $carouselContainer = $widget.find('.carousel-container');
// // //             let images = [];
// // //             let currentIndex = 0;

// // //             // Collecting images from the carousel
// // //             $carouselContainer.find('img').each(function() {
// // //                 images.push($(this).attr('src'));
// // //             });

// // //             if(images.length === 0) return;

// // //             // Function to update the full-size image
// // //             const updateFullImage = () => {
// // //                 $fullImageContainer.html(`<img src="${images[currentIndex]}" alt="Full Image" style="width: 100%; height: auto;" />`);
// // //                 currentIndex = (currentIndex + 1) % images.length;
// // //             };

// // //             // Initial Image Setup
// // //             updateFullImage();

// // //             // Start Carousel Animation
// // //             setInterval(updateFullImage, 1000);
// // //         }
// // //     };

// // //     // Registering the widget with Elementor
// // //     $(window).on('elementor/frontend/init', function() {
// // //         elementorFrontend.hooks.addAction('frontend/element_ready.image_carousel_widget.default', ImageCarouselWidget.init);
// // //     });
// // // })(jQuery);



// // (function() {
// //     const ImageCarouselWidget = {
// //         init: function(scope) {
// //             const widget = scope.querySelector('.image-carousel-widget');
// //             const fullImageContainer = widget.querySelector('.full-image-container');
// //             const carouselContainer = widget.querySelector('.carousel-container');
// //             let images = [];
// //             let currentIndex = 0;

// //             // Collecting images from the carousel
// //             carouselContainer.querySelectorAll('img').forEach(function(img) {
// //                 images.push(img.src);
// //             });
// //             console.log('Image Carousel Widget Loaded');

// //             if(images.length === 0) return;

// //             // Function to update the full-size image
// //             const updateFullImage = () => {
// //                 fullImageContainer.innerHTML = `<img src="${images[currentIndex]}" alt="Full Image" style="width: 100%; height: auto;" />`;
// //                 currentIndex = (currentIndex + 1) % images.length;
// //             };

// //             // Initial Image Setup
// //             fullImageContainer.innerHTML = `<img src="${images[0]}" alt="Full Image" style="width: 100%; height: auto;" />`;

// //             // Start Carousel Animation
// //             setInterval(updateFullImage, 1000);
// //         }
// //     };
// //     console.log('Image Carousel Widget Loaded');

// //     // Registering the widget with Elementor
// //     window.addEventListener('elementor/frontend/init', function() {
// //         elementorFrontend.hooks.addAction('frontend/element_ready.image_carousel_widget.default', function(scope) {
// //             ImageCarouselWidget.init(scope[0]);
// //         });
// //     });
// // })();
// // console.log('Image Carousel Widget Loaded');


// (function() {
//     const ImageCarouselWidget = {
//         init: function(scope) {
//             console.log('Init function called'); // Debug log
//             const widget = scope.querySelector('.image-carousel-widget');
//             if (!widget) {
//                 console.log('Widget not found'); // Debug log
//                 return;
//             }

//             const fullImageContainer = widget.querySelector('.full-image-container');
//             const carouselContainer = widget.querySelector('.carousel-container');
//             let images = [];
//             let currentIndex = 0;

//             // Collecting images from the carousel
//             carouselContainer.querySelectorAll('img').forEach(function(img) {
//                 images.push(img.src);
//             });
//             console.log('Images collected:', images); // Debug log

//             if (images.length === 0) {
//                 console.log('No images found'); // Debug log
//                 return;
//             }

//             // Function to update the full-size image
//             const updateFullImage = () => {
//                 fullImageContainer.innerHTML = `<img src="${images[currentIndex]}" alt="Full Image" style="width: 100%; height: auto;" />`;
//                 currentIndex = (currentIndex + 1) % images.length;
//             };

//             // Initial Image Setup
//             fullImageContainer.innerHTML = `<img src="${images[0]}" alt="Full Image" style="width: 100%; height: auto;" />`;

//             // Start Carousel Animation
//             setInterval(updateFullImage, 1000);
//         }
//     };
//     console.log('Image Carousel Widget script loaded'); // Debug log

//     // Registering the widget with Elementor
//     window.addEventListener('elementor/frontend/init', function() {
//         console.log('Elementor frontend init event'); // Debug log
//         elementorFrontend.hooks.addAction('frontend/element_ready.image_carousel_widget.default', function($scope) {
//             console.log('Elementor hook action called'); // Debug log
//             ImageCarouselWidget.init($scope[0]);
//         });
//     });
// })();

// document.addEventListener('DOMContentLoaded', function() {
//     const widgets = document.querySelectorAll('.image-carousel-widget');

//     widgets.forEach(function(widget) {
//         const fullImageContainer = widget.querySelector('.full-image-container');
//         const carouselContainer = widget.querySelector('.carousel-container');
//         let images = [];
//         let currentIndex = 0;

//         // Collecting images from the carousel
//         carouselContainer.querySelectorAll('img').forEach(function(img) {
//             images.push(img.src);
//         });

//         if (images.length === 0) return;

//         // Function to update the full-size image
//         const updateFullImage = () => {
//             fullImageContainer.innerHTML = `<img src="${images[currentIndex]}" alt="Full Image" style="width: 100%; height: auto;" />`;
//             currentIndex = (currentIndex + 1) % images.length;
//         };

//         // Initial Image Setup
//         fullImageContainer.innerHTML = `<img src="${images[0]}" alt="Full Image" style="width: 100%; height: auto;" />`;

//         // Start Carousel Animation
//         setInterval(updateFullImage, 1000);
//     });
// }); 


// document.addEventListener('DOMContentLoaded', function () {
//     const widgets = document.querySelectorAll('.image-carousel-widget');

//     widgets.forEach(function (widget) {
//         const fullImageContainer = widget.querySelector('.full-image-container');
//         const carouselContainer = widget.querySelector('.carousel-container');
//         let images = [];
//         let currentIndex = 0;

//         // Collecting images from the carousel
//         carouselContainer.querySelectorAll('img').forEach(function (img) {
//             images.push(img.src);
//         });

//         if (images.length === 0) return;

//         // Function to update the full-size image
//         const updateFullImage = () => {
//             fullImageContainer.innerHTML = `<img src="${images[currentIndex]}" alt="Full Image" style="width: 100%; height: auto;" />`;
//             currentIndex = (currentIndex + 1) % images.length;
//         };

//         // Function to update the carousel container
//         const updateCarouselContainer = () => {
//             carouselContainer.innerHTML = '';
//             images.forEach((src, index) => {
//                 const imgElement = document.createElement('img');
//                 imgElement.src = src;
//                 imgElement.style.order = (index - currentIndex + images.length) % images.length;
//                 carouselContainer.appendChild(imgElement);
//             });
//         };

//         // Initial Image Setup
//         fullImageContainer.innerHTML = `<img src="${images[0]}" alt="Full Image" style="width: 100%; height: auto;" />`;
//         updateCarouselContainer();

//         // Start Carousel Animation
//         setInterval(() => {
//             updateFullImage();
//             updateCarouselContainer();
//         }, 2000);
//     });
// });

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
