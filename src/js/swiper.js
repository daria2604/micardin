import Swiper from 'swiper';

export default function () {
  const swiperReviews = new Swiper('.slider--reviews', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 15,
    pagination: {
      el: '.reviews__pagination',
      type: 'bullets',
      clickable: true,
    },
  });

  const swiperCards = new Swiper('.slider--cards', {
    breakpoints: {
      550: {
        slidesPerView: 'auto',
        pagination: {
          el: '.cards__pagination',
          type: 'bullets',
          clickable: true,
        },
      },
    },
  });
}
