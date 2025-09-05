
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
  // console.log("HAY ALGUIEN AHÍ????")
  const { getListMovies, movies } = useMovies();
  const navigate = useNavigate();
  const swiperEffect = useSwiperStyle("parallax");

  useEffect(()=>{
    if(now_playing) {
      getListMovies("now_playing");
    } 

  },[]);

  return <>           
    { movies.length == 0 ?  <CircularProgress/> : 
    <Swiper parallax {...swiperEffect}> 
     { movies.map(({id, poster_path, title, backdrop_path, original_title, release_date, overview, type }) => 
     <SwiperSlide  key={id}>
      <Box className="sliderParallaxHero" mt={{xs:7, sm:10, md:14}} height={{xs:200, sm:400}}
        sx={{
          backgroundImage:`url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
          width:"100%",
          backgroundRepeat:"no-repeat",
          backgroundSize:"cover",
          backgroundPositionY:{xs:"center", md:"20%" }
        }}
        >

        <Stack 
          color={"white"} 
          pl={{xs:2, sm: 4, md:5}}
          mt={{xs:1, md:1}}
          pb={2}
          sx={{
          position:"absolute",  // display:"-webkit-box",// WebkitBoxOrient: "vertical",// textOverflow:"ellipsis",// overflow:"hidden",// WebkitLineClamp:{xs:"" }     
          }}
        >
          {/* ..... title ..... */}
          <Typography 
            className="titleMovie" 
            data-swiper-parallax="-500" 
            fontSize={{xs:"1.1em", sm:"2.1em", md:"2.4em"}} 
            sx={{textShadow:" 1px 3px 2px #000000ff"}} >
           {title}
          </Typography>

          {/* ..... date ..... */}
          <Typography 
            className="dateMovie" 
            data-swiper-parallax="-200"
            fontSize={{xs:"1em", sm:"2em" }} 
            sx={{textShadow:" 1px 3px 2px  #000000ff"}} >
            {release_date ? dayjs(release_date).format('YYYY') : 'Sin fecha'}
          </Typography>
        </Stack>
        <Button variant="outlined" 
          sx={{
            width:{xs:"26%", sm: "22%", md:"15%"},
            height:{xs:"20px", sm: "40px"},
            fontSize:{xs:"0.5em", sm: "1.5em", md:"1.3em"},
           
            mt:{xs: "42%", sm: "40%", md:"30%"},
            ml:{xs: "70%", sm: "70%", md:"80%"},
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


