document.addEventListener('DOMContentLoaded', function () {
    const widget = document.querySelector('.image-carousel-widget');
    const fullImageContainer = widget.querySelector('.full-image-container');
    const carouselContainer = widget.querySelector('.carousel-container');

    // Dynamic attributes from data-* attributes
    const direction = widget.dataset.direction || 'vertical'; // Default to vertical
    const slidesPerView = parseInt(widget.dataset.slidesPerView, 10) || 3; // Default to 5
    const autoplaySpeed = parseInt(widget.dataset.autoplaySpeed, 10) || 3000; // Default to 3000ms
    const transitionSpeed = parseInt(widget.dataset.transitionSpeed, 10) || 1000; // Default to 1000ms

    let images = Array.from(carouselContainer.querySelectorAll('img')).map(img => img.src);

    // Full Image Swiper
    const fullSwiperContainer = document.createElement('div');
    fullSwiperContainer.classList.add('swiper');
    const fullSwiperWrapper = document.createElement('div');
    fullSwiperWrapper.classList.add('swiper-wrapper');

    images.forEach((src) => {
        const slide = document.createElement('div');
        slide.classList.add('swiper-slide');
        slide.innerHTML = `<img src="${src}" alt="Full Image" style="width: 100%; height: auto;">`;
        fullSwiperWrapper.appendChild(slide);
    });

    fullSwiperContainer.appendChild(fullSwiperWrapper);
    fullImageContainer.appendChild(fullSwiperContainer);

    new Swiper(fullSwiperContainer, {
        direction: direction,
        effect: 'cube',
        loop: true,
        autoplay: { delay: autoplaySpeed, disableOnInteraction: false },
        speed: transitionSpeed,
    });

    // Thumbnail Swiper
    carouselContainer.innerHTML = ''; // Clear old content
    const thumbSwiperContainer = document.createElement('div');
    thumbSwiperContainer.classList.add('swiper');
    const thumbSwiperWrapper = document.createElement('div');
    thumbSwiperWrapper.classList.add('swiper-wrapper');

    images.forEach((src) => {
        const slide = document.createElement('div');
        slide.classList.add('swiper-slide');
        slide.innerHTML = `<img src="${src}" alt="Thumbnail" style="width: 100%; height: auto;">`;
        thumbSwiperWrapper.appendChild(slide);
    });

    thumbSwiperContainer.appendChild(thumbSwiperWrapper);
    carouselContainer.appendChild(thumbSwiperContainer);

    new Swiper(thumbSwiperContainer, {
        direction: direction,
        slidesPerView: slidesPerView,
        loop: true,
        autoplay: { delay: autoplaySpeed, disableOnInteraction: false },
        speed: transitionSpeed,
    });
});
