
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import useMovies from '../hooks/useMovies';
/* __________________________ MUI __________________________ */

import { Box, Button, IconButton, Typography } from '@mui/material';
/* __________________________ SWIPER __________________________ */
import useSwiperStyle from "../hooks/useSwiperStyle";
import { Swiper, SwiperSlide } from 'swiper/react';
import '../libs/swiper/index.css';

export default function CarouselMovies(now_playing) {
  const { getListMovies, movies } = useMovies();
  const swiperEffect = useSwiperStyle("carousel");
  const navigate = useNavigate();

  useEffect(()=>{
    if(now_playing) {

      getListMovies("now_playing");
    } 

  },[]);

  <h1>CAROUSEL</h1>
  return <>
      <Swiper {...swiperEffect}>
        
      {
        movies.length == 0 ? <h1 style={{color: "red"}}>HOLAAAA</h1> 
        : movies.map(({id, backdrop_path, title}) =>
        <SwiperSlide key={id} id={id} >
          <Box 
            sx={{
              backgroundImage: `url(${`https://image.tmdb.org/t/p/original/${backdrop_path}`})`,
              width:"100%",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              position: "center",
              height:"290px"
       
            }}
         >
          
          {/* <img  src={`https://image.tmdb.org/t/p/w200/${backdrop_path}`} alt="" /> */}
        <Typography style={{width: "200px"}}>{title}</Typography> 
        <Button variant="contained" onClick={()=> navigate(`/movie/${id}`)}>VER MAS</Button>
          <IconButton></IconButton>
        </Box> 

        </SwiperSlide>)}
    </Swiper>
  </>
}

  
