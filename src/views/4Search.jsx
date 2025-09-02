import useMovies from "../hooks/useMovies"
/* ____________________________________________________ */

import { FavoriteContext } from "../context/FavoriteContext";
/* ____________________________________________________ */

import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
/* ____________________________________________________ */

import { Favorite, FavoriteBorder } from "@mui/icons-material"; 
/* ________________________ MUI ________________________ */
import{ Box, Card, CardMedia, Grid, IconButton, Stack, TextField, Typography } from "@mui/material";
/* ____________________________________________________ */

import dayjs from "dayjs";
import image from "/public/image.png"
import Footer from "../components/7Footer";

/* ************************************************************ */
export default function Search() {
  const { searchTitleMovie, movies } = useMovies();
  const { toogleFavorite, existsInFavorites } = useContext(FavoriteContext);
  const navigate = useNavigate();
  
  function handleChange(event, value) {// function mui
    changePage(value);
  }
  useEffect(()=>{
    // getSearchMovies()
  },[])

  return <>
    <Box 
       height={"100px"} p={3}>
      <TextField 
      id="outlined-basic" 
      label="Outlined" 
      variant="outlined"
      border="2px solid red"
      onInput={(e)=> searchTitleMovie(e.target.value)} type="text" />


        
      <Typography
        pt={{xs:"10px",sm:"10px", md:"15px"}}
        pb={{xs:"15px"}}
        sx={{fontSize: { xs:"28px", sm: "55px", md:"40px" }}}>
        
      </Typography>
      <Grid container spacing={3}>
        { movies.length == 0 ? <Typography color="red"><img src={image} alt="" />BUSCA TUS PELÍCULAS</Typography>
        : movies.map(({id, poster_path, title, original_title, release_date }) =>
          
        <Grid key={id}
          padding={{sm:"10px", md:"1px"}} 
          size={{ xs: 12, sm: 6 , md: 3, lg: 3, xl:2 }}>
          <Card sx={{
            width:{sm:"100%", md:"100%" },
            backgroundColor:"#12202bba",
            borderRadius: "10px",
            border: "1px solid  #8a74fcff",
            margin:"auto",
          }}>
            <CardMedia 
              sx={{
                boxShadow:"0px 2px 10px 2px #8a74fcff",
                border: "2px solid  #8a74fcff",
                borderRadius: '10px 10px 0px 0px'
              }}
              component="img" alt="imagen de la película"
              image={`https://image.tmdb.org/t/p/original/${poster_path}`} 
              onClick={()=> navigate(`/movie/${id}`)}
            />
            <Typography
              width="100%" pt={"8px"}
              color="whitesmoke"
              paddingLeft={"12px"} 
              sx={{fontSize: { xs:"1.6em", sm: "1.9em" },
                display:"-webkit-box",
                 WebkitBoxOrient: "vertical",
                textOverflow:"ellipsis",
                overflow:"hidden",
                WebkitLineClamp:{sm:"1" }
              }}>
                {title}
            </Typography>
            <Stack
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center">
              <Typography
                color="white"
                paddingLeft={"12px"}
                sx={{ fontSize: { xs:"1.4em", sm: "1.6em" }}}
              >
                {release_date ? dayjs(release_date).format('YYYY') : 'No disponible'}
              </Typography>
              <IconButton 
                color="primary"
                onClick={()=> toogleFavorite({ id, poster_path, title, original_title, release_date})}
              >
                {existsInFavorites(id) 
                ? <Favorite sx={{fontSize: { xs:"1.5em", sm: "1.8em" }}}/> 
                : <FavoriteBorder sx={{fontSize:{ xs:"1.5em", sm:"1.8em"}}}/>}
              </IconButton>      
            </Stack>
          </Card>
        </Grid>)}
      </Grid>
      <Footer />
    </Box>

  </>
}
    // <div style={{display: "flex", flexWrap: "wrap", justifyContent : "space-around"}}>
    //   {
    //     movies.length == 0 ? <h1 style={{color: "red"}}>busca tu película</h1> 
    //     : movies.map(({id, poster_path, title, original_title, release_date}) => 
    //     <div style={{display: "flex", flexWrap: "wrap", justifyContent : "space-around"}} key={id}>
    //       <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt="" onClick={()=> navigate(`/movie/${id}`)} />
    //       <p>{title}</p>
    //       <p style={{width: "220px"}}>{release_date ? dayjs(release_date).format('YYYY') : 'No disponible'}</p>
           
    //       {/* <button onClick={()=> navigate(`/movie/${id}`)}>DETALLE</button> */}
    //       <button style={{border:"none",backgroundColor:"transparent"}} onClick={()=> toogleFavorite({id, poster_path, title, original_title})}>
    //       {existsInFavorites(id) ?  "💙" :  "🤍"}</button>
    //     </div>)
    //   }
    // </div>