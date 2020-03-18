var mySwiper = new Swiper('.swiper-container', {
  direction: 'vertical',
  //initialSlide:5,
  observer: true,
  mousewheel: {
      sensitivity: 0.1,
  },
  preventInteractionOnTransition: true, 
})