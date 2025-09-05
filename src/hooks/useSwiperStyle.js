//  Swiper React components
// Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation'

import { EffectCoverflow, Pagination, Navigation, Autoplay, Parallax } from 'swiper/modules';

export default function useSwiperStyle (type, overrideOptions = {}) {
  
  const swiperBaseConfigSliders = {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,

    pagination: {
      clickable: true,
    },
    navigation: true, 
  };

  const swiperEffectsConfigurations = {
// ..... SLIDER PARALLAX HOME .....

    parallax: {
      speed:900,
      parallax:true,
      spaceBetween: 0,
      // onSlidePrevTransitionStart={}
      centeredSlides: true,
      autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
      
    },
        
      modules: [Parallax, Autoplay, Pagination, Navigation],
      className: "sliderParallaxHero"

    },

// ..... SLIDER COVER FLOW HOME .....
    coverflow: {
      speed:600,
      effect: 'coverflow',
      centeredSlides: true,
      coverflowEffect: {
      rotate: 0,
      stretch: 80,
      // stretch: 120,
      // depth: 200,
      depth: 350,
      modifier: 1,
      slideShadows: true,
      },
      slidesPerView: "auto",
      modules: [EffectCoverflow, Pagination, Navigation, Autoplay],
      className: "coverFlowMoviesHome",
      className: "sliderSkeletonFavorites"
    
    },
  };
     
  const breakpoints= {
   
        "768": {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        "1024": {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        "1440": {
          slidesPerView: 4,
          spaceBetween: 50,
        },
  };

  const swiperEffectConfig = swiperEffectsConfigurations[type] || {};

    return { 
      ...swiperBaseConfigSliders, 
      ...swiperEffectConfig,
      ...overrideOptions,
      // breakpoints
    }; 

};