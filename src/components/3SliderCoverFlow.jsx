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
            height:{ xs: "255px", sm: "295px", md: "460px", lg: "600px", xl: "710px" },
            borderRadius: { sm: "10px 10px 0px 0px", md: "20px 20px 0px 0px" }
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

        <Stack 
          position={"relative"} 
          direction={"row"} 
          justifyContent={"center"} 
          alignItems={"center"}
          gap={{ xs: 7 , sm: 10 , md: 12, lg: 20, xl: 28 }} 
          top={{ xs:-11, sm:-9, md: -10, lg: -15, xl: -17 }}
          left={{ xs: 5, sm: 4 }}
        >
          {/* ---------- vote_average ---------- */}          
          <Box sx={{ position: "relative", display: "inline-flex" }}>
            <CircularProgress 
              variant="determinate" 
              thickness={2.2}
              size={{ xs:"2.5rem", sm:"2.6rem", md:"4.5rem", lg: "5rem" }} 
              value={Math.round((vote_average / 10 ) * 100)} 
              sx={{
                width:{ xs:"2.4rem", sm:"2.6rem", md: "4.5rem", lg: "4.8rem",  xl: "6rem" },
                height:{ xs:"2.4rem", sm:"2.6rem", md:"4.5rem", lg: "4.8rem",  xl: "6rem" },
                boxShadow: { xs: "inset 0px 0px  0px 2px #86fff5e9" ,  md: "inset 0px 0px  0px 3px #86fff5e9" , lg: "inset 0px 0px  0px 4px #86fff5e9" , xl: "inset 0px 0px  0px 5px #86fff5e9" ,},
                backgroundColor:"#000000ff",
                borderRadius:"50%", color:"secondary.main",
              }} 
            />          
            <Box
              sx={{
                position: 'absolute', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                top:{ xs:-1, sm: 1, md:1 },
                left: 0, 
                bottom: 0, 
                right: 0, 
              }}
            >
              <Typography variant="caption" component="div" 
                fontSize={{ xs:"0.8rem", sm:"0.9rem", md: "1.4rem", lg: "1.6rem" }} 
                color="#8ad3faff" 
              >
                {`${Math.round((vote_average  / 10 ) * 100)}%`}
              </Typography>
            </Box>
          </Box>
          {/* ---------- favorite ---------- */}          
          <Box>
            <IconButton onClick={()=> toogleFavorite({ id, poster_path, title, original_title, release_date, vote_average })}>
              {
                existsInFavorites(id) ? 
                <Favorite 
                  sx={{
                    color: "#4e48cbff", 
                    fontSize: { xs: "2.3rem", sm: "1.98rem", md: "3.7rem", lg: "4.5rem", xl: "5.2rem" },
                    pt:{ xs: "5px" , md: "10px", xl:"12px" }
                  }} 
                  /> : 
                  <FavoriteBorder 
                  sx={{ 
                    color: "#4e48cbff", 
                    fontSize: { xs: "2.3rem", sm: "2.4rem", md: "3.7rem", lg: "4.5rem", xl: "5.2rem" },
                    pt:{  xs: "5px", md:"10px", xl:"12px" }
                  }} 
                />
              }
            </IconButton> 
          </Box>
        </Stack>
        {/* ---------- title ---------- */}
        <Typography 
          className="title"
          width={{ xs: "80%", sm: "90%", md: "70%",lg: "92%" }}
          fontSize={{ xs: "1rem", sm: "1.1rem", md: "1.6rem", lg: "1.9rem", xl: "2.4rem" }} 
          position={"relative"}
          bottom={{ xs:-1, sm:-1, md: -12, lg: -7}}
          left={{ xs: 15, sm: 17, md: 35, lg: 35}}
          color={"typography.color"}
          borderRadius={"0px 0px 10px 10px"}
          sx={{
            display:"-webkit-box",
            WebkitBoxOrient: "vertical",
            textOverflow:"ellipsis",
            overflow:"hidden",
            WebkitLineClamp:{ xs: "2", sm:"2", lg: "2"},
          }} gutterBottom component="div"
        >
          {title}
        </Typography> 
      </SwiperSlide>)
      }
     </Swiper>
    }
  </>
}
