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


        // speed={600}
        // parallax={true}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        // modules={[Parallax, Pagination, Navigation]}
        // className="mySwiper"

  const swiperEffectsConfigurations = {

    carousel: {
       speed:900,
       parallax:true,
      spaceBetween: 0,
      // onSlidePrevTransitionStart={}
      centeredSlides: true,

      // autoplay:{
      //     delay: 2500,
      //     disableOnInteraction: false,
      //   },
        
      modules: [Parallax, Autoplay, Pagination, Navigation],
      className: "sliderParallaxHero"

      },

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
          // slidesPerView: "1.5",
          slidesPerView: "auto",
      modules: [EffectCoverflow, Pagination, Navigation, Autoplay],
    className: "coverFlowMoviesHome"
    
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
      }
    







  const swiperEffectConfig = swiperEffectsConfigurations[type] || {};

    return { 
      ...swiperBaseConfigSliders, 
      ...swiperEffectConfig,
      ...overrideOptions,
      breakpoints
    }

    };