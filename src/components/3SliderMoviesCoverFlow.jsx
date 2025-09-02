import { useNavigate } from "react-router";

import { useContext, useEffect } from "react";
/* _______________________________________________________________ */
import useMovies from "../hooks/useMovies";
import { FavoriteContext } from "../context/FavoriteContext";
/* _______________________________________________________________ */

import Typography from '@mui/material/Typography';
import { Box, Button, Card, CardMedia, CircularProgress } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
/* _______________________________________________________________ */

import { Swiper, SwiperSlide } from "swiper/react";
import useSwiperStyle from "../hooks/useSwiperStyle";
/* _______________________________________________________________ */

export default function SliderMoviesCoverFlow({type}) {

  const {getListMovies, movies, page, totalPages} = useMovies();
  const {toogleFavorite, existsInFavorites} = useContext(FavoriteContext);
  const navigate = useNavigate();
  const swiperEffect = useSwiperStyle("coverflow", {autoplay: false});


  useEffect(()=>{
    if( "" !== type ){
      getListMovies(type) 
      // getListMovies("top_rated")
    }

  },[page,type]);

  return <>   
    { movies.length == 0 ?  <CircularProgress/> 
    : <Swiper {...swiperEffect}>
        { movies.map(({id, poster_path, title, original_title, release_date, vote_average }) =>
          <SwiperSlide className="coverFlowMoviesHome" key={id}>
            <Card 
            sx={{
              width: "100%",
              objectFit: "cover",
              border: "inherit",
              userSelect: "none",
              }}>

              <CardMedia 
                component="img" alt="imagen de la película"
                image={`https://image.tmdb.org/t/p/original/${poster_path}`} onClick={()=> navigate(`/movie/${id}`)}
              />
            </Card>

            <Box display={"flex"} alignItems={"center"} justifyContent={"space-around"}>
              <Button sx={{left:"-10%"}} onClick={()=> toogleFavorite({ id, poster_path, title, original_title, release_date})}>
                {existsInFavorites(id) ? <Favorite/> : <FavoriteBorder/>}
              </Button> 
              <Typography color="typography.color">{vote_average.toFixed(2)}</Typography> 
            </Box>
            <Typography className="title"
              width={100}
              position={"absolute"}
              left={20}
              bottom={9}
              fontSize={15} 
              color={"typography.color"}
              borderRadius={"0px 0px 10px 10px"}
              sx={{
                display:"-webkit-box",
                WebkitBoxOrient: "vertical",
                textOverflow:"ellipsis",
                overflow:"hidden",
                WebkitLineClamp:{xs:"2" },
              }} gutterBottom component="div">{title}
            </Typography>

          </SwiperSlide>)
        }
      </Swiper>
    }
  </>
}
