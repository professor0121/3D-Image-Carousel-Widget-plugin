// it is working properly. The full image carousel is displayed above the thumbnail carousel.
// done with the help of the following code:


document.addEventListener('DOMContentLoaded', function () {
    const widget = document.querySelector('.image-carousel-widget');
    const fullImageContainer = widget.querySelector('.full-image-container');
    const carouselContainer = widget.querySelector('.carousel-container');

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
        direction: 'vertical',
        effect: 'cube',
        loop: true,
        autoplay: { delay: 3000, disableOnInteraction: false },
        speed: 1000,
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
        direction: 'vertical',
        slidesPerView: 5,
        loop: true,
        autoplay: { delay: 3000, disableOnInteraction: false },
        speed: 1000,
    });
});
