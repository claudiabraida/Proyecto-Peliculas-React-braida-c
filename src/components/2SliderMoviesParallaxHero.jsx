
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import useMovies from '../hooks/useMovies';

/* __________________________ MUI __________________________ */
import { Box, Button, CircularProgress, Stack, Typography } from '@mui/material';
/* __________________________ SWIPER __________________________ */
import useSwiperStyle from "../hooks/useSwiperStyle";
import { Swiper, SwiperSlide } from 'swiper/react';
import dayjs from 'dayjs';
import { red } from '@mui/material/colors';

export default function SliderParallaxHero(now_playing) {
  console.log("HAY ALGUIEN AHÍ????")
  const { getListMovies, movies } = useMovies();
  const navigate = useNavigate();
  const swiperEffect = useSwiperStyle("carousel");

  useEffect(()=>{
    if(now_playing) {
      getListMovies("now_playing");
    } 

  },[]);

  return <>           
    { movies.length == 0 ?  <CircularProgress/> 
    : <Swiper parallax {...swiperEffect}>
    { movies.map(({id, poster_path, title, backdrop_path, original_title, release_date, overview, type }) => 
    <SwiperSlide  key={id}>
      <Box className="sliderParallaxHero" mt={7} height={{xs:200, sm:400}}
        sx={{
          backgroundImage:`url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
          width:"100%",
          backgroundRepeat:"no-repeat",
          backgroundSize:"cover",
          backgroundPosition:"center"
        }}>

        <Stack 
          color={"white"} 
          pl={2}
          pb={2}
          sx={{
          position:"absolute",
         
          // display:"-webkit-box",
          // WebkitBoxOrient: "vertical",
          // textOverflow:"ellipsis",
          // overflow:"hidden",
          // WebkitLineClamp:{xs:"" }
          }}
        >
          <Typography 
            className="titleMovie" 
            data-swiper-parallax="-500" 
            fontSize={{xs:"1.1em", sm:400}} 
            sx={{textShadow:" 1px 3px 2px  #000000ff"}} >
           {title}
          </Typography>
  
          <Typography 
            className="dateMovie" 
            data-swiper-parallax="-200"
            fontSize={{xs:"1em", sm:400}} 
            sx={{textShadow:" 1px 3px 2px  #000000ff"}} >
           {release_date ? dayjs(release_date).format('YYYY') : 'Sin fecha'}
          </Typography>
  
          {/* <Typography className="overviewMovie" data-swiper-parallax="-100">
               {overview}
          </Typography> */}
          </Stack>
          <Button 
          variant="outlined" 
          sx={{
            width:70,
            height:20,
            fontSize:6,
            mt:19,
            ml:30,
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


