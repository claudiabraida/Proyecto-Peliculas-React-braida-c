import { useNavigate } from "react-router";
/* _______________________________________________________________ */
import { useContext} from "react"
import { FavoriteContext } from "../context/FavoriteContext"
import SkeletonFavorites from "../components/6SkeletonFavorites";
/* _______________________________________________________________ */
import { Box, Card, CardMedia, CircularProgress, Container, IconButton, Stack, Typography } from "@mui/material";
import { Favorite } from "@mui/icons-material";

/* _______________________________________________________________ */

import dayjs from "dayjs";
import { Swiper, SwiperSlide } from "swiper/react";
import useSwiperSlidersConfig from "../hooks/useSwiperSlidersConfig";

/* _______________________________________________________________ */

export default function FavoritesMovies() {
  const {favorites, toogleFavorite } = useContext(FavoriteContext);
  const navigate = useNavigate();
  const swiperEffect = useSwiperSlidersConfig("coverflow", {loop: false ,autoplay: false});
  return <Box 
    height={{
      xs:"460px",
      sm:"460px",
      }} 
      mt={"23%"}>


      { favorites.length == 0 ? <SkeletonFavorites /> : 
     <Swiper {...swiperEffect}>
      { favorites.map(({id, poster_path, title, original_title, release_date, vote_average }) => 
      <SwiperSlide className="coverFlowMoviesHome" key={id}>
        <Card 
          sx={{ 
            userSelect: "none",
            border: "inherit",
            height:{
              xs: "255px",
              sm: "295px",
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

        <Stack 
          position={"relative"} 
          direction={"row"} 
          justifyContent={"center"} 
          gap={{
            xs: 8 , 
            sm: 9 , 
            md: 16, 
            lg: 20
          }} 
          top={{
            xs:-8, 
            sm:-9, 
            md: -10, 
            lg: -25
          }}
        >
          {/* ---------- vote_average ---------- */}          
          <Box sx={{ position: "relative", display: "inline-flex" }}>
            <CircularProgress 
              variant="determinate" 
              thickness={2.2}
              size={{
                xs:"2.5rem", 
                sm:"2.6rem", 
                md:"4.5rem", 
                lg: "5rem"
              }} 
              value={Math.round((vote_average / 10 ) * 100)} 
              sx={{
                width:{
                  xs:"2.5rem", 
                  sm:"2.6rem", 
                  md: "4.5rem", 
                  lg: "5rem"
                },
                height:{
                  xs:"2.5rem", 
                  sm:"2.6rem", 
                  md:"4.5rem", 
                  lg: "5rem"
                },
                boxShadow:"inset 0px 0px  0px 2px #86fff5e9",
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
                top:{
                  xs:-4, 
                  sm:-3, 
                  md:4
                },
                left: 0, 
                bottom: 0, 
                right: 0, 
              }}
            >
              <Typography variant="caption" component="div" 
                fontSize={{
                  xs:"0.8rem", 
                  sm:"0.9rem", 
                  md: "1.4rem", 
                  lg: "1.6rem"
                }} color="prymary.main" >
                {`${Math.round((vote_average  / 10 ) * 100)}%`}
              </Typography>
            </Box>
          </Box>
          {/* ---------- favorite ---------- */}          
          <Box display={"flex"} alignItems={"center"} justifyContent={"space-around"}>
            <IconButton
              onClick={()=> toogleFavorite({ id, poster_path, title, original_title, release_date, vote_average})}
            >
              
                <Favorite 
                  sx={{
                    color: "#4e48cbff", 
                    fontSize: { 
                      xs: "1.8rem", 
                      sm: "1.98rem", 
                      md: "3.3rem", 
                      lg: "3.7rem"
                    }
                  }} 
                /> 
            
            </IconButton> 
          </Box>
        </Stack>
        {/* ---------- title ---------- */}
        <Typography className="title"
            width={{ 
              xs: "80%", 
              sm: "90%", 
              md: "70%",
              lg: "92%"
            }}
            fontSize={{ 
              xs: "1rem", 
              sm: "1.1rem", 
              md: "1.6rem", 
              lg: "1.9rem"
            }} 
            position={"relative"}
            bottom={{ 
              xs:-10, 
              sm:-1, 
              md: -12
            }}
            left={{ xs: 12, sm: 14, md: 20, lg: 20}}
            color={"typography.color"}
            borderRadius={"0px 0px 10px 10px"}
            sx={{
              display:"-webkit-box",
              WebkitBoxOrient: "vertical",
              textOverflow:"ellipsis",
              overflow:"hidden",
              WebkitLineClamp:{ xs: "2", sm:"2", lg: "2"},
            }} gutterBottom component="div">{title}
        </Typography> 
      </SwiperSlide>)
      }
     </Swiper>}
 </Box> 
 }
  
    {/* <Box height={"460px"} mt={"23%"}>
      <Typography color={"typography.color"} ml={"10%"} variant="h6" >Mis Favoritos</Typography>
      { favorites.length == 0 ? ( <SkeletonFavorites /> ) : ( 
      <Swiper {...swiperEffect}> { favorites.map(({id, poster_path, title, release_date}) =>
        <SwiperSlide  className=" swiperFavorites   " key={id}>
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
          <Typography className="title"
            width={{xs:120, sm:"70%"}}
            position={"absolute"}
            left={20}
            bottom={{xs:9, md:1}}
            fontSize={{xs:15, sm:20, md:"1.5em"}} 
            color={"typography.color"}
            borderRadius={"0px 0px 10px 10px"}
            sx={{
              display:"-webkit-box",
              WebkitBoxOrient: "vertical",
              textOverflow:"ellipsis",
              overflow:"hidden",
              WebkitLineClamp:{xs:"1"},
            }} gutterBottom component="div">{title}
          </Typography> 
          <Typography textAlign={"center"} fontSize={"0.5em"}color="typography.color"> 
            toca la imagen para ver el detalle
          </Typography>
          <Button onClick={()=> toogleFavorite({id})}> <Favorite/> </Button>
        </SwiperSlide>)}
      </Swiper>)}
    </Box> */}



