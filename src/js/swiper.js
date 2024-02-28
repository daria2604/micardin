import swiper from 'swiper';

export default function () {
  const swiperReviews = new swiper('.slider--reviews', {
    slidesPerView: 'auto',
    grabCursor: true,
    initialSlide: 0,
    pagination: {
      el: '.reviews__pagination',
      type: 'bullets',
      clickable: true,
    },
  });

  const swiperCards = new swiper('.slider--cards', {
    enabled: false,
    breakpoints: {
      550: {
        enabled: true,
        grabCursor: true,
        slidesPerView: 'auto',
        initialSlide: 0,
        pagination: {
          el: '.cards__pagination',
          type: 'bullets',
          clickable: true,
        },
      },
    },
  });
}
