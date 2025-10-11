
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import useMovies from '../hooks/useMovies';
/* __________________________ MUI __________________________ */
import { Box, Button, Card, CardMedia, CircularProgress, Stack, Typography } from '@mui/material';
/* __________________________ SWIPER __________________________ */
import useSwiperSlidersConfig from "../hooks/useSwiperSlidersConfig";
import { Swiper, SwiperSlide } from 'swiper/react';
import dayjs from 'dayjs';

export default function SliderParallaxHero(now_playing) {
  // console.log("HAY ALGUIEN AHÍ????")
  const { getListMovies, movies } = useMovies();
  const navigate = useNavigate();
  const swiperEffect = useSwiperSlidersConfig("parallax");

  useEffect(()=>{
    if(now_playing) {
      getListMovies("now_playing");
    } 

  },[]);

  return <>           
    { movies.length == 0 ?  <CircularProgress/> : 
    <Swiper parallax {...swiperEffect}> 
     { movies.map(({id, title, backdrop_path, release_date }) => 
     <SwiperSlide   className="sliderParallaxHero"
    
       key={id}>
        <Card 
          sx={{
            height: { xs: "200px", md: "360px",  lg: "480px", xl: "580px" },
            mt: { xs: "50px", sm: "9px", lg: "50px", xl: "-1px" },
          }}
        >
          <CardMedia
            loading="lazy"
            component="img" 
            alt={title}
            image={`https://image.tmdb.org/t/p/original/${backdrop_path}`} 
          />
          {/* ..... Group: title/date ..... */}
          <Stack 
            color={"white"} 
            pl={{ xs:2,  md: 4, lg: 3, xl: 6 }}
            pb={ 2 }
            mt={{ xs: -22, sm: -25, md: -50, lg: -67, xl: -94 }}
          >
          {/* ..... title ..... */}
          <Typography 
            position={"absolute"}
            className="titleMovie" 
            data-swiper-parallax= "-500" 
            fontSize={{  xs: "1rem",  sm: "1.2rem",  md: "1.8rem",  lg: "2rem", xl: "2.7rem" }} 
            sx={{textShadow:" 1px 3px 2px #000000ff"}} 
          >
            {title} <Typography component={"span"} data-swiper-parallax="-200" sx={{textShadow:" 1px 3px 2px  #000000ff"}} 
              fontSize={{  xs: "0.8rem", sm: "0.7rem", md: "1.2rem" , xl: "1.4rem"  }} 
              > ({release_date ? dayjs(release_date).format('YYYY') : 'Sin fecha'}) </Typography>
          </Typography>
        </Stack>

        {/* ..... button ..... */}
        <Button variant="outlined" 
          sx={{
            width:{ xs: "22%", md: "20%", lg: "15%", xl: "12%", },
            height:{ xs:"20px", md: "40px", xl: "45px" },
            fontSize:{ xs: "0.40rem", sm: "0.55rem", md: "1rem", lg: "1rem", xl: "1.3rem" },         
            mt:{ xs: "40%", sm: "35%", md: "31%", lg: "34%", xl: "29%" },
            ml:{ xs: "7%", sm: "5%", md: "5%", lg: "%" },
            borderRadius:5,
            backgroundColor:"#06153de7",
            color:"#d8f0fbff",
            "& :hover":{ backgroundColor: "secondary.main" },
          }} onClick={()=> navigate(`/movie/${id}`)}>
          ver mas...
        </Button>
        </Card>
     </SwiperSlide>)}
    </Swiper>}
  </>
}


