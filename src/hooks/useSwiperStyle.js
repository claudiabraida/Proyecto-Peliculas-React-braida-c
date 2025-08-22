//  Swiper React components
// Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation'

import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function useSwiperStyle (type, overrideOptions = {}) {
  
  const swiperBaseConfigSliders = {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,

    loop: true,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    //   pauseOnMouseEnter: true,
      
    // },
    pagination: {
      clickable: true,
    },
    navigation: true, 
  };
  // effect: 'autoplay',
  // return {
  //   swiperConfig
  // }


  const swiperEffectsConfigurations = {

    carousel: {

      spaceBetween: 50,
      // onSlidePrevTransitionStart={}
      centeredSlides: true,

      // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        
        modules: [Autoplay, Pagination, Navigation],
    className: "swiperCarouselHero"

      },

    coverflow: {
      effect: 'coverflow',
      centeredSlides: true,
      coverflowEffect: {
        rotate: 0,
        stretch: 120,
        depth: 200,
        modifier: 1,
        slideShadows: true,
      },
        
      modules: [EffectCoverflow, Pagination, Navigation, Autoplay],
    className: "swiperCoverFlow"
    
    },



    };
    
  const swiperEffectConfig = swiperEffectsConfigurations[type] || {};

    return { 
      ...swiperBaseConfigSliders, 
      ...swiperEffectConfig,
      ...overrideOptions
    }

    };