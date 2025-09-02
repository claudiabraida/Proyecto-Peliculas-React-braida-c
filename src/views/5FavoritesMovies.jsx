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
import useSwiperStyle from "../hooks/useSwiperStyle";
import Footer from "../components/7Footer";

/* _______________________________________________________________ */

export default function FavoritesMovies() {
  const {favorites, toogleFavorite, existsInFavorites} = useContext(FavoriteContext);
  const navigate = useNavigate();
  const swiperEffect = useSwiperStyle("coverflow", {loop: false ,autoplay: false});
  return <>
    <Typography variant="h5" sx={{position: 'absolute', top: '18%', left: '10%'}} >Mis Favoritos</Typography>
      { favorites.length == 0 ? ( <SkeletonFavorites/> ) : ( 
        <Swiper {...swiperEffect}> { favorites.map(({id, poster_path, title, release_date}) =>
          <SwiperSlide className="swiperFavoritos" key={id}>
            <Box sx={{ backgroundColor: '',}}>
              <Card 
               sx={{
                 width: '70%',
                 textAlign:'center', backgroundColor:'transparent',
                // backgroundColor: 'red',
                 margin: '5% auto',
                }}>
                <CardMedia 
                 sx={{
                  width: '80%', margin:'1% auto',
                  boxShadow: "0px 90px 16px -1px #8a74fcff",
                  border: '1px solid  #8a74fcff ',
                  borderRadius: '10px',
                  }} component="img" alt="imagen de la película"
                  image={`https://image.tmdb.org/t/p/original/${poster_path}`} onClick={()=> navigate(`/movie/${id}`)}
                />
              </Card>
              <Box
                sx={{backgroundColor:'#000000ff',
                  width:'200%', height:'120px',
                  textAlign:'center',
                  marginLeft:'-50%'          
                }}>
                <Typography
                  sx={{
                    width:"70%", height:'90px',
                    fontSize:'1.1em', color: '#ffffffff',
                    backgroundColor:'#000000ff', boxShadow: '-10px -10px 5px #000000ff',
                    padding:'4px', marginLeft:'13%'
                  }}gutterBottom component="div">
                  {title}-{release_date ? dayjs(release_date).format('YYYY') : 'Sin fecha'}
                  <Button onClick={()=> toogleFavorite({id})}> ? <Favorite/> : </Button>
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>)}
        </Swiper>)}
        <Footer/>     
  </>
}


