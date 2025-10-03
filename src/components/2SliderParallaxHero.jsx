
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import useMovies from '../hooks/useMovies';

/* __________________________ MUI __________________________ */
import { Box, Button, CircularProgress, Stack, Typography } from '@mui/material';
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
     <SwiperSlide  key={id}>
      <Box className="sliderParallaxHero" mt={{ sm: 7, md: 10, lg: 13}} height={{sm: 180, md: 400, lg: 380}}
        sx={{
          backgroundImage:`url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
          width: "100%",
          height:{ sm: "150px", md: "320px", lg: "380px", xl: "600px"},
          backgroundRepeat:"no-repeat",
          backgroundSize:"cover",
          backgroundPositionY:{ sm: "-5%", md: "-2%", lg: "-1%" , xl: "10%"}
        }}
        >

        <Stack 
          color={"white"} 
          pl={{ sm:2, tablet: 4, lg: 5}}
          mt={{ sm: 1, lg: 3}}
          pb={2}
          sx={{ position:"absolute"}}
            // display:"-webkit-box",// WebkitBoxOrient: "vertical",// textOverflow:"ellipsis",// overflow:"hidden",// WebkitLineClamp:{xs:"" }     
        >
          {/* ..... title ..... */}
          <Typography 
            className="titleMovie" 
            data-swiper-parallax= "-500" 
            fontSize={{ sm: "1rem", md: "1.8rem", lg: "2.rem"}} 
            sx={{textShadow:" 1px 3px 2px #000000ff"}} >
           {title}
          </Typography>

          {/* ..... date ..... */}
          <Typography 
            className="dateMovie" 
            data-swiper-parallax="-200"
            fontSize={{ sm: "0.8rem", md: "1.5rem" }} 
            sx={{textShadow:" 1px 3px 2px  #000000ff"}} >
            {release_date ? dayjs(release_date).format('YYYY') : 'Sin fecha'}
          </Typography>
        </Stack>
        <Button variant="outlined" 
          sx={{
            width:{ sm: "22%", md: "20%", lg: "15%"},
            height:{ sm:"20px", md: "40px"},
            fontSize:{ sm: "0.40rem", md: "1rem", lg: "1rem"},
           
            mt:{ sm: "32%", md: "31%", lg: "28%", xl: "-20%"},
            ml:{ sm: "73%", md: "74%", lg: "80%"},
            borderRadius:5,
            backgroundColor:"#06153de7",color:"#d8f0fbff",
            "& :hover":{ backgroundColor: "secondary.main",},
          }} onClick={()=> navigate(`/movie/${id}`)}>
          ver mas...
        </Button>
      </Box>
     </SwiperSlide>)}
    </Swiper>}
  </>
}


