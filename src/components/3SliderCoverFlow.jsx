import { useNavigate } from "react-router";

import { useContext, useEffect } from "react";
/* _______________________________________________________________ */
import useMovies from "../hooks/useMovies";
import { FavoriteContext } from "../context/FavoriteContext";
/* _______________________________________________________________ */

import Typography from '@mui/material/Typography';
import { Box, Card, CardMedia, CircularProgress, IconButton, Stack } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
/* _______________________________________________________________ */

import { Swiper, SwiperSlide } from "swiper/react";
import useSwiperSlidersConfig from "../hooks/useSwiperSlidersConfig";
/* _______________________________________________________________ */

export default function SliderMoviesCoverFlow({type}) {

  const {getListMovies, movies, page, totalPages} = useMovies();
  const {toogleFavorite, existsInFavorites} = useContext(FavoriteContext);
  const navigate = useNavigate();
  const swiperEffect = useSwiperSlidersConfig("coverflow", );

  useEffect(()=>{
    if( "" !== type ){
      getListMovies(type) 
    }
  
  },[type]);
  
  return <>   
    { movies.length == 0 ? <CircularProgress /> : 
     <Swiper {...swiperEffect}>
      { movies.map(({id, poster_path, title, original_title, release_date, vote_average }) => 
      <SwiperSlide className="coverFlowMoviesHome" key={id}>
        <Card 
          sx={{ 
            userSelect: "none",
            border: "inherit",
            height:{
              sm: "255px",
              md: "460px",
              lg: "600px",
              xl: "720px",
            },
            borderRadius: {
              sm: "10px 10px 0px 0px",
              md: "20px 20px 0px 0px",
            }
          }}
        >
          <CardMedia
            loading="lazy"
            component="img" 
            alt={title}
            image={`https://image.tmdb.org/t/p/original/${poster_path}`} 
            onClick={()=> navigate(`/movie/${id}`)}
          />
        </Card>

        <Stack direction={"row"} justifyContent={"center"} gap={{sm: 8 , md: 16, lg: 20}} position={"relative"} top={{sm:-8, md: -10, lg: -25}} >
          {/* ---------- vote_average ---------- */}          
          <Box sx={{ position: "relative", display: "inline-flex" }}>
            <CircularProgress 
              variant="determinate" 
              thickness={2.2}
              size={{sm:"2.5rem", md:"4.5rem", lg: "5rem"}} 
              value={Math.round((vote_average / 10 ) * 100)} 
              sx={{
                width:{sm:"2.5rem", md: "4.5rem", lg: "5rem"},
                height:{sm:"2.5rem", md:"4.5rem", lg: "5rem"},
                boxShadow:"inset 0px 0px  0px 2px #86fff5e9",
                backgroundColor:"#000000ff",
                borderRadius:"50%", color:"secondary.main",
              }} 
            />          
            <Box
              sx={{
                top:{sm:-3, md:5}, left: 0, bottom: 0, right: 0, position: 'absolute', 
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <Typography variant="caption" component="div" fontSize={{sm:"0.8rem", md: "1.4rem", lg: "1.6rem"}} color="prymary.main" >
                {`${Math.round((vote_average  / 10 ) * 100)}%`}
              </Typography>
            </Box>
          </Box>
          {/* ---------- favorite ---------- */}          
          <Box display={"flex"} alignItems={"center"} justifyContent={"space-around"}>
            <IconButton
              onClick={()=> toogleFavorite({ id, poster_path, title, original_title, release_date })}
            >
              {
                existsInFavorites(id) ? 
                <Favorite sx={{color: "#4e48cbff", fontSize: { sm: "1.8rem", md: "3.3rem", lg: "3.7rem"}}} /> : 
                <FavoriteBorder sx={{ color: "#4e48cbff", fontSize: { sm: "1.8rem", md: "3.3rem", lg: "3.7rem"}}} />
              }
            </IconButton> 
          </Box>
        </Stack>
        {/* ---------- title ---------- */}
        <Typography className="title"
            width={{ sm: "80%", md: "70%",  lg: "92%"}}
            fontSize={{ sm: "1rem", md: "1.6rem", lg: "1.9rem"}} 
            position={"relative"}
            bottom={{ sm:-10, md: -12}}
            left={{ sm: 10, md: 20, lg: 20}}
            color={"typography.color"}
            borderRadius={"0px 0px 10px 10px"}
            sx={{
              display:"-webkit-box",
              WebkitBoxOrient: "vertical",
              textOverflow:"ellipsis",
              overflow:"hidden",
              WebkitLineClamp:{ sm:"2", lg: "2"},
            }} gutterBottom component="div">{title}
        </Typography> 
      </SwiperSlide>)
      }
     </Swiper>
    }
  </>
}
