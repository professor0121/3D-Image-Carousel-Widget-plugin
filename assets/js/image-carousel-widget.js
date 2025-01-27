(function($){
    const ImageCarouselWidget = {
        init: function($scope, $) {
            const $widget = $scope.find('.image-carousel-widget');
            const $fullImageContainer = $widget.find('.full-image-container');
            const $carouselContainer = $widget.find('.carousel-container');
            let images = [];
            let currentIndex = 0;

            // Collecting images from the carousel
            $carouselContainer.find('img').each(function() {
                images.push($(this).attr('src'));
            });

            if(images.length === 0) return;

            // Function to update the full-size image
            const updateFullImage = () => {
                $fullImageContainer.html(`<img src="${images[currentIndex]}" alt="Full Image" style="width: 100%; height: auto;" />`);
                currentIndex = (currentIndex + 1) % images.length;
            };

            // Initial Image Setup
            updateFullImage();

            // Start Carousel Animation
            setInterval(updateFullImage, 1000);
        }
    };

    // Registering the widget with Elementor
    $(window).on('elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction('frontend/element_ready.image_carousel_widget.default', ImageCarouselWidget.init);
    });
})(jQuery);
