import Swiper from 'swiper';

export default function () {
  const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 15,
    pagination: {
      el: '.swiper-bullets',
      type: 'bullets',
      clickable: true,
    },
  });
}
