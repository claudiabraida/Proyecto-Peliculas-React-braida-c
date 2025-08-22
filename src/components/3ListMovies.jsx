import { useContext, useEffect } from "react";

import { useNavigate, useParams } from "react-router";

import useMovies from "../hooks/useMovies";

import { FavoriteContext } from "../context/FavoriteContext";
import Typography from '@mui/material/Typography';


import { Card, CardMedia } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import useSwiperStyle from "../hooks/useSwiperStyle";
import '../libs/swiper/index.css';
import { Autoplay } from "swiper/modules";
import CardContent from '@mui/material/CardContent';

export default function ListPopularMovies({type}) {
  const swiperEffect = useSwiperStyle("coverflow", {autoplay: false});

  const {getListMovies, movies} = useMovies();
  const {toogleFavorite, existsInFavorites} = useContext(FavoriteContext);
  const navigate = useNavigate();
  // const {type} = useParams()
  useEffect(()=>{
    getListMovies(type);

  },[]);
 
  return <>
        <h2>POPULAR MOVIES</h2>
      <Swiper {...swiperEffect}>
      {
        movies.length == 0 ? <h1 style={{color: "red"}}>LOADING</h1> 
        : movies.map(({id, poster_path, title, original_title }) => 
        <SwiperSlide   key={id}>
            <CardMedia sx={{
              width: "50%",
              boxShadow: "0px 0px 9px #3f1af8ff",
              marginTop: "-10%",
              position: "absolute",
              zIndex: "-1"
            }}
              component="img"
              alt="imagen de la película"
              height=""
              image={`https://image.tmdb.org/t/p/original/${poster_path}`}  onClick={()=> navigate(`/movie/${id}`)}
            />
        {/* <CardContent></CardContent> */}
          <Typography sx={{fontSize:"0.8em",
            marginTop: "80%",
            position: "absolute",
            marginLeft: "20px",
            // backgroundColor: "red",
            width:"50%",
            zIndex: "-1"
            , 
          }} gutterBottom component="div">
            {title}
          </Typography>
          

        
          {/* <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt="" width={150} onClick={()=> navigate(`/movie/${id}`)}/> */}
          {/* <button onClick={()=> navigate(`/movie/${id}`)}>VER DETALLE</button> */}

          <button style={{border:"none",backgroundColor:"transparent"}} 
            onClick={()=> toogleFavorite({id, poster_path, title, original_title}) 
            // + navigate(`/favorites-movies/${id}`)
          }>{existsInFavorites(id) ? "💙" :  "🤍"}
          </button>
        </SwiperSlide>)
      }
      </Swiper>
  </>
}
