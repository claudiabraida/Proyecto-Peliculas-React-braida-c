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
  const navigate = useNavigate();

  useEffect(()=>{
    // getSearchMovies()
  },[])

  return <>
    <Grid mt={22} container spacing={3}>
      <Box position={"absolute"} top={"15%"} left={25}
        component="form"
        sx={{
          '& > :not(style)': { width: "30ch"},
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
       { movies.length == 0 ? <Stack position={"relative"} top={{mobile:"-20px", }} ml={{mobile:"14%"}} > <img src={image} alt="icono de películas" /> </Stack>
       : movies.map(({id, poster_path, title, original_title, release_date }) =>
        <Grid  top={"-50px"} key={id}
          padding={{mobile:"10px", desktop:"1px"}}
          size={{ mobile: 12, tablet: 6 , desktop: 3, largeDesktop: 4 }}>
          <Card sx={{
            width:{mobile:"80%", desktop:"100%" },
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
              onError={(e) => {e.target.src = image}}
              onClick={()=> navigate(`/movie/${id}`)}
            />
            <Typography
              width="100%" pt={"8px"}
              color="whitesmoke"
              paddingLeft={"12px"}
              sx={{fontSize: { mobile:"1.6em", tablet: "1.9em" },
                display:"-webkit-box",
                WebkitBoxOrient: "vertical",
                textOverflow:"ellipsis",
                overflow:"hidden",
                WebkitLineClamp:{tablet:"1" }
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
                sx={{ fontSize: { mobile:"1.4rem", tablet: "1.6rem" }}}
              >
                {release_date ? dayjs(release_date).format('YYYY') : 'No disponible'}
              </Typography>
              <IconButton
                color="primary"
                onClick={()=> toogleFavorite({ id, poster_path, title, original_title, release_date})}
              >
                {existsInFavorites(id)
                ? <Favorite sx={{fontSize: { mobile:"1.5rem", tablet: "1.8rem" }}}/>
                : <FavoriteBorder sx={{fontSize:{ mobile:"1.5rem", tablet:"1.8rem"}}}/>}
              </IconButton>
            </Stack>
          </Card>
        </Grid>)}
      </Grid>
  </>
}
