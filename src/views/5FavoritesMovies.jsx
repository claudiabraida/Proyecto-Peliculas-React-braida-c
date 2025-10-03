import { useNavigate } from "react-router";
/* _______________________________________________________________ */
import { useContext} from "react"
import { FavoriteContext } from "../context/FavoriteContext"
import SkeletonFavorites from "../components/6SkeletonFavorites";
/* _______________________________________________________________ */

import { Box, Button, Card, CardMedia, Container, Typography } from "@mui/material";
import { Favorite } from "@mui/icons-material";

/* _______________________________________________________________ */

import dayjs from "dayjs";
import { Swiper, SwiperSlide } from "swiper/react";
import useSwiperSlidersConfig from "../hooks/useSwiperSlidersConfig";

/* _______________________________________________________________ */

export default function FavoritesMovies() {
  const {favorites, toogleFavorite, existsInFavorites} = useContext(FavoriteContext);
  const navigate = useNavigate();
  const swiperEffect = useSwiperSlidersConfig("coverflow", {loop: false ,autoplay: false});
  return <>
    <Box height={"460px"} mt={"23%"}>
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
    </Box>
  </>
}


