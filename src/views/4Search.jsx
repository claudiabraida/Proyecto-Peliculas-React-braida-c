import useMovies from "../hooks/useMovies"
/* ____________________________________________________ */

import { FavoriteContext } from "../context/FavoriteContext";
/* ____________________________________________________ */

import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
/* ____________________________________________________ */

import { Favorite, FavoriteBorder } from "@mui/icons-material"; 
/* ________________________ MUI ________________________ */
import{ Box, Card, CardMedia, Grid, IconButton, Stack, TextField, Typography } from "@mui/material";
/* ____________________________________________________ */

import dayjs from "dayjs";
import image from "/public/image.png"

/* ************************************************************ */
export default function Search() {
  const { searchTitleMovie, movies } = useMovies();
  const { toogleFavorite, existsInFavorites } = useContext(FavoriteContext);
  const [searchTitle, setSearchTitle] = useState("")
  const navigate = useNavigate();
  
  function valueTitleChange(e) {
    const valueTitle= e.target.value
    searchTitleMovie(valueTitle)
  }
  useEffect(()=>{
    // getSearchMovies()
  },[])

  return <>
    <Grid height={"420px"} marginTop={"25%"} color={"red"} container spacing={3}>
      <Box
        component="form"
        sx={{ 
          '& > :not(style)': { m: 4, width: '25ch' },
          '& .MuiInputBase-input': {color:"typography.color"}
        }}
        noValidate
        autoComplete="off">
        <TextField 
          label="Busca tus películas aquí (superman, matrix...)"
          variant="standard"
          color="secondary"      
          focused
          onChange={(e)=> searchTitleMovie(e.target.value)} type="text" 
        />
      </Box> 
       { movies.length == 0 ? <Stack mt={{xs:"-20%", }} ml={{xs:"14%"}} > <img src={image} alt="icono de películas" /> </Stack>        
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
  </>
}
