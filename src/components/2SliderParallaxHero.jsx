
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
      <Box className="sliderParallaxHero" 
        mt={{ 
          xs: 7,
          sm: 8,
          md: 10, 
          lg: 13
        }} 
        height={{
          xs: 180, 
          sm: 190, 
          md: 400, 
          lg: 380
        }}
        sx={{
          backgroundImage:`url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
          width: "100%",
          height:{ 
            xs: "180px", 
            sm: "190px", 
            md: "320px", 
            lg: "380px", 
            xl: "600px"
          },
          backgroundRepeat:"no-repeat",
          backgroundSize:"cover",
          backgroundPositionY:{ 
            xs: "-2%",
            sm: "20%", 
            md: "-2%", 
            lg: "-1%", 
            xl: "10%"
          }
        }}
        >
        {/* ..... title/date ..... */}
        <Stack 
          color={"white"} 
          pl={{ 
            xs:2, 
            md: 4, 
            lg: 5
          }}
          mt={{ 
            xs: 1, 
            sm: 0.2, 
            md: 1, 
            lg: 3
          }}
          pb={ 2 }
          sx={{ position:"absolute" }}
            // display:"-webkit-box",// WebkitBoxOrient: "vertical",// textOverflow:"ellipsis",// overflow:"hidden",// WebkitLineClamp:{xs:"" }     
        >
          {/* ..... title ..... */}
          <Typography 
            className="titleMovie" 
            data-swiper-parallax= "-500" 
            fontSize={{ 
              xs: "1rem", 
              sm: "1.3rem", 
              md: "1.8rem", 
              lg: "2rem"
            }} 
            sx={{textShadow:" 1px 3px 2px #000000ff"}} >
            {title} <Typography 
              component={"span"} data-swiper-parallax="-200"
              fontSize={{ 
                xs: "0.8rem",
                sm: "0.7rem",
                md: "1.2rem" 
              }} sx={{textShadow:" 1px 3px 2px  #000000ff"}} >
            ({release_date ? dayjs(release_date).format('YYYY') : 'Sin fecha'}) </Typography>
          </Typography>
        </Stack>

        {/* ..... button ..... */}
        <Button variant="outlined" 
          sx={{
            width:{ 
              xs: "22%", 
              md: "20%", 
              lg: "15%"
            },
            height:{ 
              xs:"20px", 
              sm:"22px", 
              md: "40px"
            },
            fontSize:{ 
              xs: "0.40rem", 
              sm: "0.55rem", 
              md: "1rem", 
              lg: "1rem"
            },         
            mt:{ 
              xs: "32%", 
              sm: "35%", 
              md: "31%", 
              lg: "28%", 
              xl: "-20%"
            },
            ml:{ 
              xs: "74%", 
              sm: "73%", 
              md: "74%", 
              lg: "80%"
            },
            borderRadius:5,
            backgroundColor:"#06153de7",
            color:"#d8f0fbff",
            "& :hover":{ backgroundColor: "secondary.main" },
          }} onClick={()=> navigate(`/movie/${id}`)}>
          ver mas...
        </Button>
      </Box>
     </SwiperSlide>)}
    </Swiper>}
  </>
}


